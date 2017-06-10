import express from 'express';
import colors from 'colors';


export default function login(data) {

    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    const router = express.Router();

    router.post('/', (req, res) => {
        var id = req.body.id;
        var pw = req.body.pw;
        if(id=='admin' && pw=='123'){
            return res.json({
                msg:'login success',
                login:true
            });
        }
        else{
            return res.json({
                msg:'login failed',
                login:false
            });
        }
        console.log(colors.green('[LOGIN_REQ]'), getIP(req), id, pw);
    });
    /*
    router.get('/', (req, res) => {
        console.log(colors.yellow('[REQ]'), data.number, getIP(req));
        return res.json({number: data.number});
    });*/

    return router;

}