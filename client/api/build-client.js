import axios from 'axios';

const custom_build = ({req}) =>{
    if(typeof window === 'undefined'){

        // var baseURL = 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';

        // if(process.env.NODE_ENV != 'development'){
        //     baseURL = 'http://www.racoonrepublic.xyz/';
        // }


        var baseURL = 'http://www.racoonrepublic.xyz/';
        return axios.create({
            baseURL,
            headers: req.headers
        });
    } else {
        return axios.create({
            baseURL: '/'
        });
    }
};

export default custom_build;