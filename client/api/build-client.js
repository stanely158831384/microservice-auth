import axios from 'axios';

const custom_build = ({req}) =>{
    if(typeof window === 'undefined'){
        return axios.create({
            // baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            // dev mode
            
            baseURL: 'http://www.racoonrepublic.xyz/',
            headers: req.headers
        });
    } else {
        return axios.create({
            baseURL: '/'
        });
    }
};

export default custom_build;