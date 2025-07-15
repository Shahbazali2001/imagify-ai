import jwt from "jsonwebtoken";
import "dotenv/config";


export const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "User not logged in",
      });
    }

    const token = authHeader.split(" ")[1];

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
      
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};























// export const userAuth = async (req, res, next) => {
//     try{
//        const {token} = req.headers;

//         if(!token){
//             return res.status(401).json({
//                 success: false,
//                 message: "User not logged in",
//             });
//         }

//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

//         if(tokenDecode.id){
//             req.body.userId = tokenDecode.id;
//         }else{
//             return res.status(401).json({
//                 success: false,
//                 message: "User not logged in",
//             });
//         }

//         next();

//     }catch(error){
//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// }
