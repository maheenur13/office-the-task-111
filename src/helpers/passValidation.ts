export const passValidation = (value: number) => {

    let validation = value >=8;
    if(validation===true) {
        return true;
    }
    else if(validation===false) {
        return false;
    }

}

export const setTimeValidation = ({item1, item2,item3}:any) => {
let count = 59
const [isSendCodeDisabled, setIsSendCodeDisabled] = item1;
const [errors, setErrors] = item2;
const [timer, setTimer] = item3;
const newErrors = { ...errors };
setIsSendCodeDisabled(true);
newErrors.isSetTimer = true;
setErrors(newErrors);
// console.log(isSendCodeDisabled, errors)
    const setTime = setInterval(function () {
        
        // console.log(count);
        if (count <= -1) {
            setIsSendCodeDisabled(false);
            newErrors.isSetTimer = false;
            setErrors(newErrors);
            clearInterval(setTime);
        } else {
            setTimer(count--);
        }
    }, 1000);
}