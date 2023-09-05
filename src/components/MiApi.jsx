export const MiApi = async (setData, idioma) => {
        try {
            let url= `https://restcountries.com/v3.1/lang/${idioma}`;
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching countries', error);
        }
    };
    
