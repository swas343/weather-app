export const getTime = (dateN) =>{
    const dateObj = new Date(dateN);
    return dateObj.getHours() + ':' + dateObj.getMinutes();
} 

export const getCurrentDate = () =>{
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    return days[d.getDay()] + ' ' + d.getDate() + ' ' + d.getFullYear()  
}

export const extractData = (data) =>{
    
    let output = {
        'id':data.id || 0,
        'name':data.name || '-',
        'description':data.weather[0].description || '-',
        'weatherGroup':data.weather[0].main || '-',
        'icon':data.weather[0].icon || '-',
        'temperature':data.main.temp || '-',
        'high':data.main.temp_max || '-',
        'low':data.main.temp_min || '-',
        'humidity':data.main.humidity || '-',
        'wind':data.wind.speed || '-',
        'sunrise':getTime(data.sys.sunrise) || '-',
        'sunset':getTime(data.sys.sunset) || '-',
        'country':data.sys.country || '-'
    };

    return output;
}

export const getFavorites = (obj) =>{
    let result = {}
    for (const key in obj) {
        if(obj[key].isFavorite){
            result[key] = obj[key]
        }
    }
    return result;
}