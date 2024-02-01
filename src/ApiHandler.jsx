import axios from "axios";

const apiBaseDomain = "http://localhost:8017";
const apiBaseUrl = `${apiBaseDomain}`+"/api/v1";

const handleApiError = (req ,endpointName, error) => {
    console.error(`Error in ${req} request to ${endpointName} endpoint: `, error);
    throw error;
}

export const deadletter = async(stageName) => {
    try{
        const response = await axios.get(`${apiBaseDomain}/deadletter/rowData/`+ stageName);
        return response;
    }catch(error){
        handleApiError('get','deadletter/rowData',error);
    }
}

export const getAll = () => {
    return axios.get(`${apiBaseUrl}/getAll`,{
        headers:{
          'Content-Type': 'application/json',
        }
      });
};

export const getStagesCounts = async () => {
    try {
        const response = await axios.post(`${apiBaseUrl}/getStagesCounts`);
        return response.data;
    } catch (error) {
        handleApiError('post', 'getStagesCounts', error);
    }
};

export const reject = async(body) => {
    try {
        const response = await axios.put(`${apiBaseUrl}/reject`, body, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
        return response;
    } catch (error) {
        handleApiError('put', 'reject', error);
    }
};


export const rejectTopic = async(body, params) => {
    try {
        const response = await axios.put(`${apiBaseUrl}/reject-topics`, body, {
            headers: {
              'Content-Type': 'application/json',
            },
            params : params
          },);
        return response;
    } catch (error) {
        handleApiError('put', 'rejectTopics', error);
    }
};


export const resubmit = async(body) => {
    try {
        const response = await axios.put(`${apiBaseUrl}/resubmit`, body, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
        return response;
    } catch (error) {
        handleApiError('put', 'resubmit', error);
    }
};

export const resubmitTopic = async(body, params) => {
    try {
        const response = await axios.put(`${apiBaseUrl}/resubmission-topics`,body,{
            headers:{
                'Content-Type': 'application/json',
            },
            params: params
        });
        return response;
    } catch (error){
        handleApiError('put','resubmission-topics',error);
    }
}
