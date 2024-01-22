function extract(path) {

    let lastSlashIndex = path.lastIndexOf("\\");
    let lastFullStopIndex = path.lastIndexOf(".");

    let fileName = path.substring(lastSlashIndex + 1, lastFullStopIndex)
    console.log(`File name: ${fileName}`);
    let extension = path.substring(lastFullStopIndex + 1)
    console.log(`Extension: ${extension}`);


}
extract('C:\\Internal\\training-internal\\Template.pptx')