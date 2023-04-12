const jwt = require('jsonwebtoken');

//protectted routes for token base
 module.exports=async (req, res, next) => {
    try {
      const decode = jwt.verify(
        req.headers.authorization,
        process.env.mySecret
      );
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
    };
  };
