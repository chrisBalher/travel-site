exports.handler = function(event, context, callback){
    const secretContent = `
    <h3>Bienvenido al Area Secreta</h3>
    <p>Solo nuestros clientes pueden ingresar aquí</p>
    `
    let body 
    if(event.body){
        body = JSON.parse(event.body)
    }else{
        body = {}
    }
    if(body.password == "javascript"){
        callback(null, {
            statusCode:200,
            body: secretContent
        })
    }else{
        callback(null, {
            statusCode:401
        })
    }
    
}