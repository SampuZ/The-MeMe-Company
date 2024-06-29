let DEBUG = true//(process.env.NODE_ENV==='development');

function logd(str){
    if(DEBUG)console.log(str)
}

module.exports={logd}