async function loadFile(){

    let fileLoaded = true;

    if(fileLoaded){
        return "File loaded";
    }
    else{
        return "File not loaded";
    }
};
async function startProcess(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
};
startProcess();

