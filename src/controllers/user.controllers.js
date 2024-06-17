import { asyncHandler } from "../utils/AsyncHandler.js"
import { apiError } from "../utils/APIError.js";
import {User} from "../modals/user.modal.js";
import apiResponse from "../utils/APIResponse.js";
import { uploadFileOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
    
    const { fullName, email, userName, password } = req.body;

    if ([fullName, email, userName, password].some((items) => items?.trim() === "")) {
        throw  apiError(400, "All Fields are required")
    };

    const existingUser= await User.findOne({
        $or:[{userName}, {email}]
    });

    if(existingUser){
        throw  apiError(409, "Username or email already exist")
    };
 
    const avatarLocalPath= await req.files?.avatar[0]?.path;

    let coverImageLocalPath;

    if( req.files && Array.isArray(req.files.coverImage) && req.files.coverImage[0].path){
        coverImageLocalPath= req.files.coverImage[0].path
    };
    

    if(!avatarLocalPath){
        throw  apiError( 400, "Avatar is required")
    };

    const avatar= await uploadFileOnCloudinary(avatarLocalPath);
    const coverImage = await uploadFileOnCloudinary(coverImageLocalPath);

    const user= await User.create({
        fullName,
        avatar:avatar.url,
        coverImage: coverImage?.url || " ",
        password,
        email,
        userName:userName.toLowerCase()
    });


    const createUser= await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if(!createUser){
        throw  apiError(500, "Something went wrong")
    };

    return res.status(201).json(
         apiResponse(200,"User registered Successfully",createUser)
    )


});


export { registerUser }