

export function SecondsMin(sec: number){
    return(
        (sec / 60).toFixed(1)
    )
}

export function formatSec(sec: number){
    const _min = Math.floor(sec / 60);
    const _sec = sec % 60;

    const minText = `${_min} min`
    const secText = `${_sec} sec`
    const connector = " and "

   const calculation = []

    if(_min > 0){
        calculation.push(minText)
    }

    if(_min && _sec > 0){
        calculation.push(connector)
    }

    if(_sec >  0){
        calculation.push(secText)
    }


    return(
        calculation
        )
}