export const passValidation = (value: number) => {

    let validation = value >=8;
    if(validation===true) {
        return true;
    }
    else if(validation===false) {
        return false;
    }

}