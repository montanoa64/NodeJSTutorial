const env = process.env;

//export a const
export const nodeEnv = env.NODE_ENV || 'development';
//export an object when being importeds
export const logStars = function(message){
    console.info('**********');
    console.info(message);
    console.info('*********');
};
export default {
    port: env.PORT || 8080
};
