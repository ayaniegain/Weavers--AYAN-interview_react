import dateFormat from "dateformat";


export function formatedDate(now) {
    return (dateFormat(now, "ddd mmm dd"));
}