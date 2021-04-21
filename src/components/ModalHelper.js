
const equalsHours = (hours1, hours2) => {
    let hours1_len_eq0 = hours1.length === 0
    let hours2_len_eq0 = hours2.length === 0
    if (hours1_len_eq0 && hours2_len_eq0) {
        return true
    } else if (hours1_len_eq0 !== hours2_len_eq0) {
        return false
    }
    // they're both length 2
    return hours1[0] === hours2[0] && hours1[1] === hours2[1]
}
const transformPhoneNumber = (phone_num) => {
    if (phone_num) {
        let pn_str = phone_num.toString()
        return "(".concat(pn_str.substring(0, 3), ") ", pn_str.substring(3, 6), "-", pn_str.substring(6))
    } else {
        return "(000) 000-0000"
    }
}
const checkForMalformat = (hours) => {
    if (!hours || typeof hours !== 'object' || hours.length !== 7) {
        return true
    }
    for (let i = 0; i < hours.length; i++) {
        if (typeof hours[i] !== 'object') {
            return true
        }
        if (hours[i].length === 0) {
            continue
        } else if (hours[i].length !== 2) {
            return true
        }

        let num1 = hours[i][0]
        let num2 = hours[i][1]
        if (typeof num1 !== 'number' || typeof num2 !== 'number' ||
            num1 < 0 || num1 > 2400 || num2 < 0 || num2 > 2400) {
            return true
        }

        if ((num1 % 1 !== 0 || num2 % 1 !== 0) ||
            (num1 % 100 + num1 % 10 >= 60) ||
            (num2 % 100 + num2 % 10 >= 60)) {
            return true
        }
    }

    return false
}
const convertTo12HourTime = (time) => {
    let minutes = time % 100
    let hours_24 = (time - minutes) / 100
    let hours_12 = (hours_24 === 0 || hours_24 === 12) ? 12 : hours_24 % 12
    let am_pm = hours_24 < 12 ? "am" : "pm"


    let minutes_str = minutes.toString()

    if (minutes_str.length === 1) {
        minutes_str = minutes_str + '0'
    }

    return hours_12.toString().concat(":", minutes_str, am_pm)
}
const transformHoursOfOper = (hours) => {
    if (checkForMalformat(hours)) {
        return [" Unknown hours of operation"]
    }

    // this object maps from the start index of the pattern to an object with
    // the end index and the hours for that pattern
    let patterns = []

    let curr_start_idx = 0
    for (let i = 1; i < hours.length; i++) {
        if (!equalsHours(hours[curr_start_idx], hours[i])) {
            patterns.push({ "start": curr_start_idx, "end": i - 1, "hours": hours[curr_start_idx] })
            curr_start_idx = i
        }
    }
    patterns.push({ "start": curr_start_idx, "end": hours.length - 1, "hours": hours[curr_start_idx] });

    let indices_to_str = {
        0: " Mon",
        1: " Tues",
        2: " Wed",
        3: " Thurs",
        4: " Fri",
        5: " Sat",
        6: " Sun"
    }

    let ret = [];
    for (const pattern of patterns) {
        let curr_str = indices_to_str[pattern["start"]];
        if (pattern["start"] !== pattern["end"]) {
            curr_str = curr_str.concat("-", indices_to_str[pattern["end"]]);
        }
        curr_str = curr_str.concat(": ");
        if (pattern["hours"].length === 0) {
            curr_str = curr_str.concat("Closed");
        } else if (pattern["hours"][0] === 0 && pattern["hours"][1] === 0) {
            curr_str = curr_str.concat("Open 24 Hours");
        } else {
            curr_str = curr_str.concat(convertTo12HourTime(pattern["hours"][0]),
                " - ",
                convertTo12HourTime(pattern["hours"][1]));
        }
        ret.push(curr_str);
    }

    return ret
}

export {transformPhoneNumber, transformHoursOfOper}