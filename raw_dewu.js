/*
目标:  得物App 抓包心愿森林heders里的x-auth-token 不要值前面的Bearer
格式：export dewu="token=eyJhxxxxxxxx"  多账号换行隔开
cron 32 5,36 8,12,18,22 * * ? 每天跑6-8次
*/
const $ = new Env("得物心愿森林");
let envSplitor = [
  '\n']  //多账号隔开方式，默认换行可自定义
let dwHelp = 2
///////////////////////////////维护参数自行更换//////////////////////////////////
let deviceTrait = 'OXF-AN10'                   //设备型号
let deviceId = '2c08291babffa692'         //设备标识
let appVersion = '5.14.5'                     //软件版本
let defaultUA = 'Mozilla/5.0 (Linux; Android 9; OXF-AN10 Build/PQ3A.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.117 Mobile Safari/537.36/duapp/5.14.5(android;9)'                    //默认UA
let helpcode = '%F0%9F%8C%BB%F0%9F%91%A7%F0%9F%8C%BA%F0%9F%8C%BB%F0%9F%91%A6%F0%9F%8C%B5%F0%9F%92%AE'
//需要助力账号的互助码  搜索keyword=后面的值 #Referer、url和 响应体 里都有，若果是emoji需要找没转码的，或者自行转码后再放入脚本
//http://www.esjson.com/urlEncode.html      //编码转换网址
var version_='jsjiami.com.v7';function _0x4815(){
  const _0x3e1624=(function(){
    return[
      ...[
        version_,
        'OQjxsYjkiFEaempPiIr.UrVcgGoeDWml.LYfv7yX==',
        'nSkUW4rsW50',
        'W5NdQLWMW7S',
        'DSoxWPOv',
        'w8kzymkFWPVdSa',
        'xWzqWO57',
        'omoJbqdcKL7dUCk9ga',
        'W51GWQbXD1xcOvS',
        'W4rCWOTwgCo7',
        'fmojWPlcNJq',
        'uN3dKqRcSG',
        'kt9jWR8Unuu',
        'wmkGtSkVWPC',
        'WPWTadCE',
        'kCoPgaVcL1ZdTq',
        '6lA45y6woG',
        'yIJdTvJdTZ8O',
        'W7epdW',
        'W5hdUYZdTSkljwFcHxPtFSoo',
        'WQ4PeZyEt8or',
        'mfpdIXXM',
        'WO05W5urBCkQcq',
        'hCoRWOG',
        'jNpdSaO',
        'WOjjWQpdImooc8kvCW',
        'fGhcO8kR',
        'BtNdTxZdRwHICmkWW7lcUSksWP7dPSkUlCkzW4ekW4xcQHtcQqHnyCk6FcVdGKdcHxVdHHxdTIdcQI/dOIf/ACodWQLSWOhdV8oYWOpcJCo1r8kTcMdcQfRcHxddOW',
        'W77dQmkhzdNdQq',
        'WQFdO8o5u8oo',
        'wYS3WOO',
        'W6hcSmoBaq',
        'WQSfWOFcSSkE',
        '5lIv6lsC5y22',
        'W6JcJhNcNCo3B0q',
        'W4BdUMKBW70',
        'asClW5G',
        'jhNdObTkW65dyG',
        'W5FdGK4R',
        'W4P7WRWM',
        'CSkPWO/cH8kCWOxdJbuGbLxcVa',
        'dSkeW4bW',
        'W4/dI8oXW6Sc',
        'zmkvW5LoAG',
        'W5HyWPLznCoTW7a',
        'BtNdTxZdRwHICmkWW7lcUSksWP7dPSkUlCkzW4ekW4xcQHtcQqHnyCk6FcVdGKdcHxVdHHxdTIdcUY7dQcm8yCoeW6eGWPVdUSoeWPpcNmoYgSkahxlcQK3cIa',
        'W551WQaICa',
        'WO89W5qnza',
        'BsZdMutdKG',
        'W4bSWOSqsW',
        'ksaQW7BdHW',
        'ECkZW4JdN3XJW7nouuvXzSoTr8kglEs6GEwiVUs5IEwkRwjMzSoEWQJdISoSjCoxsvn7sCoLyq',
        'WOaJfquvwCk/FehcJ0RdJW',
        'nCoTbGe',
        'aSkkW4nGW7NcHJi6BSopW68',
        '5lQw5y6W5lI/57I+6zIb',
        'WRJcPwdcOG',
        'W5ddJf4V',
        'W47cSKxcQSo/',
        'hahcUSkV',
        'W4pOJ5BLV7yX',
        'qGDC',
        'qMTy5P6x6Ac55y2e',
        'W4X7WRy6',
        'WPaOWQVdSW',
        'W67dGCoFW6xcRmoAW6NdL8oKWR55',
        'W6u/dmkbWOS',
        'wmk3WQLWW6y',
        'dgPu4OoQ4Okt4Oc/4OoJ44gW',
        'CK3dO8oJW4ldL1/cTGZcVNH7WR3dISkSW5ZOT5ZLJ57MOilMT77dOSocWODGd8ode2lcK8orWP7dR8ovW4jI',
        'xbndWOL7',
        'WPBcQu3cRgO',
        'vCkeEmkBWO3cUmkoW7aNW5GIW67dOSkhW6lcIuJcPCoDsWhdOHH8zIxcUSobW4xcRdapAu7dTLu7W7NcV8kPW70zd1HHWPu',
        'WRhdQmkfsEw1G+wTUoAjMq',
        'dahcVCkLWQBcNG',
        'dtmdW7xdTW',
        'WPhcU3dcSbC',
        'WQWBfCo5D8kJhZFdH8kl',
        'W7NcKSoDW4NcHW',
        'W6lcGSoFW6hcRCoyW47dLa',
        'WPy9WRldPJpcT8o9nWCMWRuzdCkPWPTbWOJdPCkYzCoSfuicWQBdRSo+W4FcQLj6WRddTIhdTCo0W50sh8kyWRRdGvmFWQnGW7j0W6VcLCkAWQSe',
        'FCkVWQTrW4G',
        'rCoeWOfVW6xcR2PMW6H4kuZdPwNdPSoJCSkGW50vf8ozW7fs',
        'CLhdGInBvLa',
        'W7OtdNTgW67dOW',
        '6lEk5y67kq',
        'W77dQLmnW4i',
        'WO5UWQRdHSoe',
        'FfnMqG',
        'W6JdVcZdOSk1',
        'u1/dTtbstrq',
        'cCognmoBW4JcTCksW6CaW5eOWOxdKmkp',
        'W5XXWQeSCvdcQW',
        'rd4QWO7dTbhdMfumW6FcGCodWRlcIZGeWPJcUZhdJuNcLsVcLSo+WRRdKZhcJ1H2W5HSmNnBWOhcRgJdOGTofXBcQJBdTCkUW7ldP8ksW6GVhq',
        'W6BcLeG',
        'WOfgWO3dJxG',
        '6lEq5y+FWOS',
        'i8kcW5TfsmosiCkVW57cImkgW4Of',
        'AYZdRgK',
        'bZisW43dJmkOc1/dO8kVWOurxmo+W7vKwmkCAImbs0hdO2VcGmkqWP47csGxEuvIjtvXW4BdTSo3f8oUW4r5f8keWO5kAwxcImooiCoj',
        'vSksWPzZW7/dTI4kW6z9nXBcOZBcOmkMCmoHW4yrvCouWRilkM8RAmk+lmkzWRPYedVcRtJcHmoyW7GmECkJWOZdTG3cVmojWQWYW4PuW7xcS8km',
        'W4FdGKKHW4FcUCkCWP8',
        'yCkXW5tdUNG',
        'W7elaCkX',
        'W6BcPmoCdmodWP0NWOC',
        'W4jqWOOXAq',
        'df8CW5RLT6ZPOilLJja',
        'W7RdU8oiW4a',
        'W4/dStJdMmkjn0W',
        'zxZcJCk5WOldS8k5WPFdVmoHn8o0W7m',
        'AhryFbe',
        'WR7cT8krWOhLTP3LR4dMIAO',
        'rLpcG8kGWO8',
        'WR3dGmoKr8oN',
        'WPK1W4OkzmkU',
        'u8kQW7TGDG',
        'WOBcV0/cJtHXdW',
        'cCoiECkPWPxdH8owWOO',
        'W7ddJSo2u+wpM+MIIUwnGG',
        'WOyCWQdcTSk/kmoLsSoGlIddLa',
        'cKZcUmktW4hcP1pcTN8eW78Z',
        'W4CSnmkrWRW',
        'FmkvW5vQAIddKSkGomkPWPbd',
        'WQb6WQRdIKu',
        'W5NdJv4GW5W',
        'WQ4GW5BcGmkkWPat',
        'W6bYWPOuFW',
        'W5StW5CcdmoNFrW',
        'WPG5W5iHDCkUcCkUWPCVW7aAWOW',
        'bZisW43dJmkOc1/dO8kVWOurxmo+W7vKwmkCAImbs0hdO2VcGmkqWP47csGxEuvIjtvXW5hdSSo/f8o9W5nOlCoCWPHFEhlcK8ojkmoXWPbDzCogW7SR',
        'k8o+W5VdVSoeW5tdQWSSk0tcSG',
        '5Q6W5RAc5RkC772O5B+I5yQ55lMZ5zoO56sU5RA75Ro6776c5lQK5OMp5y2i55IL5yAw5l6v5OoW',
        '6lwg5yYsW7y',
        'rcSgWRBdIW',
        'WOWaWOlcPmkNlmo4qq',
        'm3RcRmkPW7i',
        'W6ZcGLS',
        'F8k9W5FdOI7cN1e',
        'mIxdRSoTjq',
        'W4mIkUAGT+w8PEMwKUITUa',
        'WR/cQCkqawu',
        'WPm5W5aBBq',
        '6lAi5y+JWOK',
        'W4q0W74Giq',
        'WQ/cLSo5EmoJWQKJAa',
        'W7ypgmkwWQ8/W7a',
        'WPdcU0JcGW',
        'woESHoE4PUwLMUwiR+w2OoMJI+woIq',
        'lZTjWRSmiK3dUq',
        'WPCwWR7cQCk/o8o0',
        'zSozWOurhW',
        'fWlcUSkNWO7cLa',
        'WRJcHSk6f1f+W6C',
        'bmo/WOZcHG',
        'WP4PasSxs8ku',
        'AH4CWQ7dVW',
        'umkzWPLPWRNcU20PkSoDWQ7dU8ka',
        'ESkNWPZcPW',
        'W6tdQmkzAG',
        'l8oJaahcLq',
        'rEs7JEwkSoI+IEAHJ+wLTUwkOq',
        'WO8PW5BcGCkCWOTvyW',
        'WOhdNmorWOddMa',
        'W6FcIeJcVCo1yM5lWQ/cQSoogG',
        'nZvDWPeSj27dS8k5WRpdNCkk',
        'W77dQmkhzbVdRmkwbq',
        'DYJdSMpdSIqO',
        'WO4OWRtdTY0',
        'qSk3W5/dTJ4',
        'xb1cWO4',
        'qcu5WR/dQu/cUruzW77cL8ku',
        'iwNcUSklW6CSaa',
        'AsldPK3dSdydmmkLW6VcRmof',
        'WQOCWQ8iWO7dN1FdNSoGWQK',
        'W5hdUYW',
        'W7VcGSogW6e',
        'eSoUWPxcNJGTWR8xfqCYzmkQgCoeyYJdTmoABta4lSkhWRJcSSkvtSoxxa',
        'W7ZcJCopW6hcPW',
        'xHDsWP93W7lcOX0',
        'zuhdLrHn',
        'DmoFWOiafmku',
        'WQdcGSkPeLK',
        'W7VcM8kSW4RLJzdPOBFLJ4a',
        'AN7dIcLz',
        'WRldHCotWO/dNmkuF8opfmk6W4zvtsVcJq',
        'WO4Mhay0',
        'W6ebhCkHWQq',
        'DJNdOhJdQYe',
        'rqfYWPvZW7tcQKRcGLm',
        'WQlcHSkOhfH6W7e',
        'pdBdSSon',
        'hrBcOWRcQYT8W6ddTaJdL8kw',
        'xbtdPCof',
        'W4NdTtJdNmkRietcJW',
        'FCkPWOxcQ8kBWPxcSW',
        'WPKgWOhdGHi',
        'xa7dTh7dPa',
        'WQiniSojDSk2btFdN8kXWRNcOCo+f8oiBG',
        'W61+WRpMOihLVz/PLOBORAW',
        'W6aIW7CKcq',
        'WRSbWROxWRS',
        'W4pMI4NLVRZPGRVNNOROJ7VLV63MSQ/MU5RLGRZcHa',
        'WOSGW4pcRCkBWPbwF8k5WPvHe3e',
        'W59pWPfAoCoX',
        'W6ubbCkW',
        'qHtdUSobWP8',
        'rmkuWRTfW7u',
        'W47dPcFdNSkr',
        'DCk5W7fYDq',
        '6ls05y2bWRu',
        'WQKhmCoxDmk3pt3dH8khWQ3cVq',
        'eSkaW5P0W7JcOW',
        'WOtcR0/cIG',
        'W4NcJ8o5dSov',
        'WQBcTSkPfLe',
        'FNFcImk/WPRdOmk5',
        's8kTW6NdMtG',
        'WQejhCoCEa',
        'W6PbWRSNWRhdQexdRG',
        'mSowWPbFztFdT8kBnCkWWPmyFq',
        'W4HoWP5Vaq',
        'otldQmowdhRcHq',
        'W7/dQSomW40glXVdR0FdR8oqdmkmbYNcNMXOxLWqWPXWjSkZWOhcMCo8WR1Z',
        'W7PxWPKTsa',
        'fCoGmINcSq',
        'WOfiWPxdG1/dIa',
        'weddLYfnhL9+WRtdTGpdKYTdW4PiW6JdJ8kdW73cNCo1W5NdQqxcHgFcOtpdKSoui1HwjmkBm8kaw8kIhIZdM8kNlYa',
        'cSo+gYVcVq',
        'qb1wWRTWW6dcIedcGL8xhG',
        'zmkNWQxcTCkc',
        'WQK7W7aQAG',
        'aqTsWR4l',
        'WPDUesGAtSkcELpcNW7cJmogWRC6WQtdL8kCWPSPW54MpdPhWOPhDXesWRjaWOvsCs8t',
        'W5pcTKtcKSou',
        'F2lcL8k5WOi',
        'CSkvW5zs',
        'WOdcTvFcHZO',
        'FvJdTGzK',
        'cHq1W47dVq',
        'd2pcVmk4W6W6BMhdRMZdOCkG',
        'mUs9NowqVUs6T+E4Ga',
        'r8kxWPNcJSkA',
        'WQlOJ6VLVlhMSyRMU7xLG6bw',
        'WPJdG8oLrSoU',
        '6lsB5yYhvW',
        'WPDeWRW',
        'wSkhWPzI',
        'F8kyW4zczsO',
        'wvRdLtHkqq',
        'WP5CWQtdK8oZumoxox8XWRLxWQRcP8oGW5bqW6JcTx1fkNRdVXWHW5RcMJ9DW6eaW6ZcLq',
        'W4NdVsBdKSklneq',
        'xfVdHbbqqd4+WQhdRXxcHa',
        'WQvBWQ0jWRVdNKhdKSopWRraW48',
        'zgBcJ8kGWOxcRmoZW63dRSo0nCktW7nKi8kRsKBdHcxcGSojcmkyWQDwWQ3cOq82fdjNWQhcKmocdSkWm8kGW7fYxmkiW4bioG',
        'faxcOmkPWPVcKG',
        'W4ZdJCovW4Gw',
        'WPBcKu7cIXO',
        'W73cHSokW6dcUSodW5m',
        'W4LmWP4jxG',
        '5AA3WRRcKCkmuwZKURdMLB7OV7BMNQRMI63LJyi',
        '6lEJ5y6Fdq'],
      ...(function(){
        return[
          ...[
            'W63dRmka',
            'W7JdNCoUW4qb',
            'WQZcLSoJzW',
            'W6tdVmkz',
            'WPyvWOdcSSkQ',
            'WOaQW5dcS8kbWOz9DCksWPvPda',
            'WOqXW4pcGSkCW5GCnCkhWOX/w3RdUL/cKSoehSkdWPPfmmkJWQVdUmojfGZdNZZdPJNcUmovcCkowLGVcq7cRmocWRlcQCofrXVdP8kNmSoot8oVWQddUmoEa8kyrHKoF8oSaa',
            'zCoxWOCa',
            'W70AaSk0WRLKWRScW6FcNCoFW6esWOzqbvVdMsxcQCkgWPddJKhcOCkvfSkKW7H/lL/dMSofjCozwWPwc1XIWRRdJSkdW4WrECoNW6q',
            'WOviWPtdIxS',
            'xCkjWOzM',
            'W5juW50je8o4BeVdJrTRWRynW5xcNwRdOa',
            '6lwW5y+RW5G',
            'WRrnWRhdKCoLgmoy',
            'WPFcSwRcGZHUdG',
            'WPGKW4tcMCkMWOy',
            'WQtcJmkWfLO',
            '6ls25yYnW6K',
            's1VdSHxcNIfNW4W',
            'WPlMNkhOR6VOT7dMIlNLPzxOTOxVVQRLJRFPHkZLPjlMLQ7MI6hMO4/MNPBLJltPHPNMOkdLVRm',
            'zgBcJ8kGWOxcRmoZW63dRSo0nCktW7nKi8kRsKBdHcxcGSojcmkyWQDwWQ3cOq82fdjNWQhcKmocdSkTpmkLW7mPxmoFW4zFlmoSWO7cRG',
            'WQyDjmoKF8k9bX7dLSkyWQ7cQmoBe8onAYmo',
            'uCovW4XxW5VcQHeS',
            '6lAp5y6bW68',
            't1VdSX/cPW',
            'b8o/WPBcMr8VWRmg',
            'jhNdTb9rW7W',
            'WPimgmodAq',
            'W7pdUSkDzZe',
            'EqyCWQRdNq',
            'a8ouWPdcTZC',
            'n8oJda',
            'W5dcSmoPW4xcJW',
            'dmoinCoCW4JcTCokWPu8W7KAWRm',
            'WR7cGSk2fG',
            'FSkBW59o',
            'qSoVWQiqga',
            'WPWZW4GkzmkYgmoMWRW/W64z',
            'WOKCWQRcH8k9kCoFqmoskYFdIG',
            'uu/dRa',
            'WRCPWOK/WOi',
            'WRtcKCk0a1HPW6a',
            'm8kUW65VW5i',
            'BXOxWRxdTq',
            'uSkjWOvcW6lcQe9kW7nKiue',
            'WRtdPMJcTxOnW4/dIe3dMqe',
            'yGldHLJdJa',
            'tCkrFSkkWPm',
            'dCkCW7DqW64',
            'u8kryCko',
            'AcJdHv/dSa',
            'W50zW4agcCovAKhdMcj9WQC',
            'WQinpW4k',
            'zXPEWQjq',
            'W7FdTmoyW4qx',
            'dmkkW4PuW6tcOXe6B8oiW73dVG',
            'WOzDWQpdIW',
            'W7tdOLmhW4q',
            'WRhLVPBLI6xNRkdNUjBdJGxcLG',
            'ocpdQCoqdMVcIv4j',
            'k8o+dJVcMexdVCk/h8ou',
            'W4jyWOHrmCo8W6y',
            'W5LoWQPym8o6W6RdRcdcItBcOJvLW5q',
            'r1xdIIu',
            '5Roy5RQX5ykl',
            'WRJdKbNdISkIm1PlWQVcU8oskW',
            'gc7cQ8klW60Zt3RdVYFcVCo7WO4E',
            'WOCnn8oKF8kHuW',
            'WRFdN8oYWP4',
            'WRVcPxRcVuafW43dGW',
            'dIHGWOml',
            'W4VdKKG7W70',
            'WPRcU1hcHW',
            'uqZdS2RdQW',
            'WPldImon',
            'q0pdLWjQ',
            'iCo+mIlcGG',
            'WP08WRtdPcxdO8kMxaCV',
            'WOufW4SfzSkQW6RdQZ3cNYtcOG',
            'dcFdISotiW',
            'WPG5W5iAymkOdq',
            'aCo7WPlcKYmQWPaweq',
            'W7a3pmkIWOe',
            'mmoXWOVcHJqGWQPoma0Ylmk0aG',
            'qqhdQCouWOFdOa',
            'DZdcMmk/WPJdSSk1WRBdPSoRk8kFWQ0',
            'W73dQmkDEW',
            'WQhdLCktWRtdQCkgWPpcI8kaW70Hx1ldHW',
            'bUwpOEwUTUAlGg9UhSkIW60',
            'W7ldTCoBW6abkdtdTfRdQCoywG',
            'WRCzaCodBG',
            'n8oJdcxcLu7dNSk9aSojW71C',
            'fmoLotFcIa',
            'W7VcKLZcLa',
            '6lw95y27ma',
            'WRyyoSo/BG',
            'xHZdU8ou',
            'W48Homk0WPO',
            'vmkdxSkoWP3dP8oiWQKJW7O3WRFdP8kqW7e',
            'WQpcOwFcSxOm',
            'yUs8OowtMEs5ToE5TEwKJUwkPSkt',
            'W6pcOmoBbSoDWOiS',
            'Dq/dIeFdHW',
            'ySk2W5FdQHK',
            'W6RdTCoxW4qb',
            'WOhdImoDzq',
            'jZJdVmo4dMJcRLCeWQJcP8kq',
            'WOBdNmohEq',
            'rHRdO8ofWPW',
            'W7KefvrgW67dOCkpEgiMWPBcKdyzjq',
            'Bmk0W4S',
            '6lEd5y6eWPy',
            'W4RdTt/dKSkxkeFcJt8',
            'W6RcLMJcKSo4',
            'xLxdJJq',
            'n1VcS8kUW6q',
            'oJzw',
            '6k+75Rgq5AEk6lE1',
            'WRFdMCoM',
            'WQZcVfNcLwa',
            'yNpcLSk1',
            'zmkvzCkFWPm',
            '6lE25yYuWOa',
            'Bu/dHq7cRa',
            'iNpdQbTn',
            'wGhdVmoqWOhcQt7dJuKdW6zkWPrizCkKW7vjjSo2btWfWRRdQeDCDSkoshVcLLeZWPbQW557W5PfWP5McHnoWQr0CWu',
            'W7aApCkMWOa',
            'nSojcdxcIq',
            'o0pcJCkqW60',
            'CSkkWOZcVSkK',
            'qcmTWOO',
            'dw3cTSkC',
            'WRejjCo9vmkYhJC',
            'W7JdRmkhydNdU8kE',
            'WRRcISkTa1S',
            'W6xcJmoyW7a',
            'W67PMAxMSi7LMklcS+InR+w9PUAZJUA5TowdLg4',
            'WPisWQtcSG',
            'WPySWQFdSIxdV8kH',
            'FYFdTgddUW',
            'vCknW4nJDW',
            'WRa9WPhdHIS',
            'W67KUPNKV6FMJyVLP5/LIANMN7hLP53LJPBVV6tLH5NMRAhMIBJOOly',
            'F8ktWQn7W68',
            'WR8oWQFdHa0',
            'ymkpW4fd',
            't8k9W4BdVcRcJHq',
            'wXnyWO4',
            'wuldRrZcKW',
            'W4JPMQJMSylLMQZdSa',
            'oZJdQmon',
            'zSoKWRqKoW',
            'WRjmWOhdO04',
            'hX5IWOqa',
            'WO8KW5NcOmkkWOnx',
            'W7fhWOPXiG',
            'W4neWQSAwG',
            'qb9AWPnU',
            'WRBcV13cKdf1sG',
            'WQSjo8oZ',
            'nSkVW59fW4G',
            'Fh3cImkK',
            'WP9bWQJdJ2C',
            'EJddSSoSWQm',
            'W4CdW5K',
            'BCoOoYJcS0pdHW',
            'C8kvW5zo',
            'W4bZWPesxG',
            'b23cKmkZW6a',
            'WO0GWQhdUb/dPmk8',
            'x8kFAmks',
            'W5tdNY/dJCkZ',
            'W4tcISozmmoL',
            'WPfKWPtdT8oZ',
            'l8oTga/cTuVdVCk3',
            'WQJdN8oMWOtdOmkyEa',
            'WQ/cMmoHDSoz',
            'WPXAWQxdH3VdNdrlW75O',
            'qMTy5Bwp6Ac55y2e',
            'WRyjWOSxWRa',
            'W7ddHvVcNCoOBwLaW7NdUCkk',
            'WRFdMCoMWQVdKCkvwmowbCkbW4vB',
            'WPugWR7cRG',
            'W5etW40MjG',
            'WRS3W48sCW',
            'WODmWPxdH3RdMJ0',
            'W79SWRXyja',
            '6lsk5y69bq',
            'W4nYWPL6pa',
            'WRBdHCoM',
            'iSkkW653W64',
            'WQeAoCoMDSk2bW',
            'aCo7WPBcNt04WRS',
            'W4CPl05F',
            'hYlcOCk5WO0',
            'W4mxgCkYWQ8',
            '6lw95y6Tyq',
            'kCoPcahcKLZdTCoJ',
            'ldldR8oMfh7cHv0VWQJcR8kpWRu',
            'WO3MIRdLV5VPGANNN5hLPzRLIkxcUUw1V+E4RoMHH+wnOUI9R+s7SW',
            'uCkFA8kQWPddPSoVWRaYW4e0WRK',
            '6lEq5y2EW68',
            'WRldMmo3WOpdI8ku',
            'AxpdLsvw',
            'WOldImohESotrmoQrG',
            'W4j7WRucC0lcGfRdS8kZWQBdGW',
            'kw/dPw3dP3b3',
            'WPxcUSk4j1K',
            'xfxdRWRcRZzJ',
            'ACkNWOhcSG',
            'efNcQSodWP3dVMhcJK0hW7mIWPXmDCoZW6e',
            'WQKhmq',
            'WQhcPwtcSW',
            'WOJcPw/cRK8',
            'A3FcJW',
            'WOpMNPZORkZOTypMI63LPPZOTjFVVRFLJBhPHilLPzpMLR3MIzNMOy7MNzFLJ4NPHQJMOlRLVlq',
            'WP0LWQFdPtpdPmk0yq',
            'ymotWP0BhCkqCW',
            '5ywD5OIm5yIb',
            'W57dTsxdPCkaie0',
            'uEAjGEwoMUInP+w9Oq',
            'lLjbEWbjrW',
            'WPxdHSozyCoZsmoTv2NcTKDT',
            'WPiQW4SvAG',
            'WOGKW4pcKW',
            'WR3dN8oTWP7dMSkd',
            'W7BcJmofW6dcTSofW4NdNmkO',
            'cGxcVCkHWOpcJbC',
            'E8oyWOCa',
            'WRJdO8o4WRVdQW',
            'cs8iW5ZdK8o+xq',
            'qmoUWOaena',
            'WORcP2hcHLC',
            'W7RdRgmEW4y',
            'WRtdPN3cT30pW7tdNX/cHGhdNmov',
            'WP/dH8ocEmoRsmo8z1ZcV1rdua',
            'yh3cNa',
            'z8kBW5TF',
            'yUIoJEw8LUAXIUA4VUwbPc0',
            'WRSneXaP',
            'w0dcUCkkWRG',
            'DLD8uG',
            'kdJdTCoDcxJcIvCE',
            'WQVdMCoYWP4',
            'W73dK1C/W58',
            'W6NdPSkAEZddO8kptCoiyCkuWRi',
            'WRyCWQ8bWR/dN0e',
            'sCkFz8koWPa',
            'W4/dI8orW6mc',
            'ubRdRmoz',
            'WR3cOx7cT3WaW67dKWi',
            'kWeNaxevASkrBITKW6e',
            'WOaSW4tcHG',
            'sw/dKYFcPa',
            'n3ddRW',
            'W7xdTSoRW4aU',
            'W5X1WP9OnW',
            'ALnIwcrwDq',
            'gt9BWQiNmqa',
            'sSkYW7DIBG',
            'WRJcLwxcLH0'],
          ...(function(){
            return[
              'tv/dSHhcPI5Y',
              'W6XXWRmXEftdRG',
              'WOesWRNcPW',
              'WQ4yWRWeWRC',
              'rHZdPCofWPZdPNW',
              'W6tdKSoJrWW4W4ZdR8o6WOBcK8oD',
              'q+I3KEELOos7SUs6QoESL+E6H+I/LUw1Ta',
              'WR9VWQhdL8o6',
              'ymkBW4bkAq',
              'y13cMSk6WRG',
              'W7Spg8kH',
              'WRhcHSknfh0',
              'WP4GW4tcNCkdWPrw',
              'WO3PMkxMS6/LMjSo6i675BYd5Rk05RM55yoFW7S',
              'W7ddU8orW4q',
              'W6SVc1Xf',
              'xI89WPVdRL3cKKK',
              'W5ZdV8oDW5mkpLO',
              'qISZWPS',
              'W5NdPItdH8kjjf0',
              'WPvjWR7dSCoLc8kC',
              'WRujjmo3DW',
              'F1VdMYLp',
              'xvxdPqC',
              'W7uuySoQkCkVqs7cGG',
              'b+kELoAEJEAlSowjV8k/F8kc6k2L6zQY6kYH6iAp5P206k2S5PUQ',
              'WQlcOwtcTgSw',
              'WPusWR/cP8k+',
              'W79mWPmaBW',
              'Duv2',
              'ASkPWOpcO8kC',
              'WQFcVLJcJXm',
              'W7yvfxTzWRhcUmofDu0KW53cGZiCngtcGbLHlWpcHXpcRIpcO8ocmxmymCo6vWtcRLCFrmo0WQhcH8oAWO3dQmkkWRqmymkcWQJcHq',
              'awpcV8ka',
              'W6hcGSoyW6/cS8ov',
              't1xdSGO',
              'etHuWRG1',
              'fUIpOow8JoAYJEA6LowaSmoA',
              'WRpcG8o+y8oeW6P8iSkTW6xcU1y7WQhdVSo0cLyODGldKqfRW4RcLqKSe8oLqmoikMKPW68EW7StWPFdS8kICCk0iYWhta',
              'ySkFW5foBtldUCo8',
              'BSk3W4RdOYBcIa',
              'tCksWPaXW6BcV25l',
              'vCkrWPznW7K',
              'WR7cSK7cHuO',
              'W6JdVCo2W7CN',
              'W5xdOd/dH8kwEWBdHw9kAmkzEu4QW7OvWOFcKtPcW7mYWRZcI3hcVsRcTd3cImoZW55pWPLlFcv3WOrylmkcW5ZcVSkYWQpcUq',
              'CCozWOmehCkdySkSW4dcQSkPW6y',
              'W6BcPmobhq',
              '6lsu5y6cW5m',
              'x8kfWOpcQCkW',
              'WQpcOx/cS2i',
              'W5pdTsBdKG',
              'Eh3cKmk1WPG',
              'fmkaW4X4W57cTtOWuSof',
              'WPiEWORcTSkz',
              'dWhcUSkRWP3cKXZdVgxdOtOMW7ZcGSo1',
              'FCk5W5xdRYi',
              'BtNdTxZdRwHICmkWW7lcUSksWP7dPSkUlCkzW4ekW4xcQHtcQqHnyCk6FcVdGKdcHxVdHHxdTIdcQI/dOIf/ACodWQTOWPddUCoFWOBdKmoOuSkrhwZcVvO',
              'eCoXWOhcIW',
              'WPJdHSotWPldJq',
              'W545WOFcJSoEWP4azSos',
              't8kvB8koWPFdTmoe',
              'WOSsWQdcOW',
              'EmofWPyzgW',
              'W7/dSsRdHCkamWK',
              'WPNcV1hcGdf1',
              'cYCsW5W',
              'W7ycf8k3WRK3W7ju',
              'WRT/WRJdU8o1',
              'WP8SW6T0kXhcPx/dVCklWOJdIq',
              'W7hdHLS4W6ZcQSor',
              'WPBcTvJcMW',
              'W7KbeCkfWQq6W5PcW7lcHmojWRy',
              'nILD',
              'W7VLJjJKUA/MTztMSOm',
              'WQVdL8oZWOVdKG',
              'tmkExCkrWQ0',
              'BfL6uIy',
              'qLhdKd5suHu',
              'WRWZW4GkzmkYgmoMWOqJW7aBWPCL',
              'mKBcLSk7W5m',
              'huyeW4SNWRddSuNcRNG/ld4',
              'WQVcMmo5zW',
              'BMRcQCkhWR8',
              'aCoCkdtcNa',
              'WQBcQM3cS3y',
              'W4RcRv7cL8oH',
              'FCkjW5u',
              'WOyyWPVcP8k/jmo1',
              'eSkaW556W6BcStO',
              'W7NdOCkBEdJdVSkC',
              'efNcQSouWPpdOhRcTLedW7ngW4OCjmkS',
              's8kNECk9WRW',
              'W4ZLJB7POk7LJR/cNmozD8oE',
              'WPLgWOhdQxJdIbzbW75KW40S',
              'W7auda',
              'W5CUof9L',
              'WOeGW5RcKmkkWPa',
              'kY9jWRG',
              'kZTiWReV',
              's1VdSHxcHdL6W4W',
              'lt7dQbTAW69jiCo9g8ohdq',
              'ehJcUSknW7CT',
              'WQVcTMBcPMibW5q',
              'itml',
              '5RgI5RUO5yk/',
              'DeFcLmkXWRO',
              'wCobWP4zcW',
              'omo/WR3cHty',
              'yh3cNmkrWPJdSSksWQ3dU8oTi8oe',
              'u8kvWOu',
              'lCkJW6zLW4C',
              'WPmZW4e',
              '5Q6r5Rw65Rom77Y85BYd5yUs56+k57I9FW',
              'W5ZdUWtdR8kY',
              'BmkJWOVcO8kBWPFdPW',
              'W7FdTmokW4GBkr/dJL3dPComASkc',
              'W4RcPetcK8oz',
              'WQ3dMSkBWRFdRmkfW6ldP8krW7mYtq',
              'cW5XWRKa',
              'W5tdUI/dKSkD',
              'W4utW4iccCodFvNdItX8',
              'gYCvW5BdQ8oRvbu',
              'umkIWORcT8k6',
              'WPHAWOe',
              'WPddMSo4WRVdJG',
              'FSozWOK1h8kcwmkMW7lcR8kUW7G',
              'CmkNWOxcOW',
              'WPJcTvVcOZPJjbuqWRtcJau',
              'WPWCWQ8xWR/dNXi',
              'BSkZW7hdRYpcLva',
              'uchdOSoKWPu',
              'WRVcT2BcJYu',
              'WP1DWPldMgxcLNCbW6T9W5T7lSkaW5FdNCkiWO4bcLjYWOBcMd4TjCo0W5DMW71WDvTdWR0+gYuCoSoqiSkFCwu',
              'W7O4jvjN',
              '6lAw5y+kWQm',
              'WPpdJmoQWQJdKq',
              'WPJPO67LJOdMT5hMSk7LPOxLI4lOJ6xLVkq',
              'WOqgWRNcRSk8pW',
              'WQ4wWR0r',
              'W7xcPmoCca',
              'W63dQcVcOM8xW4VdSHBcK0BdHmonlq',
              'e3VdSbTW',
              'WQuRW57cTSkT',
              'q8orWRqrcq',
              'W5ZdRwOTW4C',
              'W7pMIyFLJRpKURJLIRZLT5tLRylMIku',
              'gSoTWQBcNtW+WRigca0',
              'aYKb',
              'WOfiWPxdG0ldLsHl',
              'WRJLIjRKVPtMS7lMUkD3',
              'WOu2W6xcL8kmWODABmkd',
              'AsVdS0RdLW',
              'oNpdPd9nW7XOpmoTumkBvG',
              'WObjWRZdISoK',
              'CsJdOghdIIaOoSkyW6y',
              'WRX+WOldPmov',
              '6ls45yYXWRm',
              'W7WfW73cJSkTr8ovoYqTWROqW67dPmk/WPNLVyROMyVKUkFLIR8mkttcVvWJWPBdM35EWQzEWQ7dLLy',
              'tWtdGhBdTa',
              'FmkFW5XmCcW',
              'FmkvW5u',
              'W53dLSoLW4W2',
              'aYmiW5RdI8o6',
              '6lEy5y6+WP0',
              'WRFcTvlcLJfPhLCOWRJcHbTgWP4',
              'W4pdGKGRW6q',
              'v1bfWP9/W6NcKL3cK1m4a3VcPq',
              'W5FdGKm',
              'EHpdPmopWOO',
              'Emk+WPNcGSkc',
              '6lAB5y2Jea',
              'W7RdU8krudBdOSkwdCovBa',
              '5Rce5RUa5ykF',
              'WPe9W4SB',
              'x8kdWRrKW4u',
              'W4VdQKm/W44',
              'WQy6WQZcHmkY',
              'W7m6nmkpWPS',
              'b23cR8ky',
              'BaBdReFdSW',
              'tZ8SWOZdOKxcGY0mW6pcLmkFWR/cGcGJW5pcRZ/dKGi',
              'WPfiWPldIq',
              'W6upbmkLWQC',
              '5Roy5RQX5yklW5ldGSopeW',
              'mCo2WP/cVrG',
              'W716WQjNjW',
              'hZmvW5u',
              'bWRdIZtcGXnbW4a',
              'weddLYfnhL9+WRtdTGpdKYTdW4PiW6JdJ8kdW73cNCo1W5NdQqxcHgFcOtpdKSoui1HwjmkBm8kbtCkMasZdM8kNidS',
              'aqtdGHnVst4O',
              'uxhdLbdcIa',
              'vCkeEmkBWO3cUmkoW7aNW5GIW67dOSkhW6lcIuJcPCoDsWhdOHH8zIxcUSobW4xcRcmzz07dTLu7W7JcRCk/W6qzcvr8WOddKa4',
              'b8o/WPBcMrGQ',
              'atml',
              'W7FcJmopW70',
              'W4j5WQ5niW',
              'C8obWO0vgq',
              'W6BdPSkttJVdQCk1d8oiCCkcWQ4',
              'WRJcIg7cUKy',
              'f8obmI/cRG',
              'w3BcICkgWQ4',
              'WQldJmoDr8ow',
              'ySkFW4feAdldUq',
              'WOjhWOpdL8oYa8kwCq',
              'W69aWQqmuW',
              'tmkdWPfSW6dcUMq',
              'W7/cPmofda',
              'qMzszY8',
              'W6BdOmkhEW',
              'aCoCWRFcVHy',
              'uvVdRbS',
              'emkeW590W6C',
              'W6hcJmoaW6hcSq',
              'WOtcTu/cLG',
              'WOvgWPxdNa',
              '5RoV5RMc5yk9',
              'W67dQmkaBG',
              'W6OaeMb+W7ldP8kp',
              'WQpcHSk1fW',
              'WP0OWQJdHcxdRmk2',
              'W5BcR8oYW6NcHG',
              'WRtcGSkVeG',
              'tH1vWOm',
              'WQKyWQCr',
              'WQWgimo/BSk2itFdGa',
              'lYxdTmojdgNcLa',
              'ymk9W4RdRcRcJG',
              't8kvF8keWPldTmoe',
              'W5L1WRS3',
              'WRtdJmovy8o6x8k5',
              'W6/cH8k5W57cH8oftSowbSknW7fl',
              'W6JdPSkqDG',
              'W7ied2XEW6m',
              'dmkaW4nYW77cRW',
              'WOnMWRRdTmoV',
              '6lEz5y6RW70',
              'W4NdISkqtHe',
              'qbRdVCooWPy',
              'W5ddOZpdO8k3',
              'gSoWWOZcHG',
              'c+woP+MGHEwoQa7cTrHT',
              'WOldJmohzq',
              'ECkoW57dQsW',
              'f2pcSmkCW6W',
              'WOGXW7JcSCkS',
              'tCkFF8kF',
              'WQChmSoV',
              'WPSTgZa',
              'W6RdOe84W7m',
              'WPJdImozDa',
              'W6yEgSkTWR4',
              'dcCiW6/dMSoZqa',
              'W4hdHKKLW6xcRSku',
              'ANJdQb3cPG',
              'pEs/V+wtTEs4N+E4TEwMKEwlRM8',
              'W6hcQSoBhq',
              'A2nZBqW',
              '6lA35yYYW7m',
              'wGhdVmoqWOhcQt7dJuKdW6zkWPrizCkKW7vjjSo2btWfWRRdQeDCDSkosgJcGf8ZWPbQW557W5PfWP5MgXLaWQX0Cq'];
          }())];
      }())];
  }());_0x4815=function(){
    return _0x3e1624;
  };return _0x4815();
};const _0x36d9c7=_0x4634;(function(_0x34011b,
                                     _0x2fbeab,
                                     _0x4acd00,
                                     _0x5b147b,
                                     _0x476edc,
                                     _0x2da1a1,
                                     _0x290fe4){
  return _0x34011b=_0x34011b>>0x1,
    _0x2da1a1='hs',
    _0x290fe4='hs',
    function(_0x290381,
              _0x3c7b70,
              _0xc190df,
              _0xb30ada,
              _0x4c07de){
    const _0x4bfe0b=_0x4634;_0xb30ada='tfi',
      _0x2da1a1=_0xb30ada+_0x2da1a1,
      _0x4c07de='up',
      _0x290fe4+=_0x4c07de,
      _0x2da1a1=_0xc190df(_0x2da1a1),
      _0x290fe4=_0xc190df(_0x290fe4),
      _0xc190df=0x0;const _0x293599=_0x290381();while(!![
      ]&&--_0x5b147b+_0x3c7b70){
        try{
          _0xb30ada=-parseInt(_0x4bfe0b(0x263,
                                        '7UAM'))/0x1+parseInt(_0x4bfe0b(0x398,
                                                                        '#hdj'))/0x2*(-parseInt(_0x4bfe0b(0x4ca,
                                                                                                          '6G8V'))/0x3)+-parseInt(_0x4bfe0b(0x305,
                                                                                                                                            'nLK)'))/0x4+-parseInt(_0x4bfe0b(0x473,
'wSI!'))/0x5+parseInt(_0x4bfe0b(0x3fa,
                                '*DQc'))/0x6*(-parseInt(_0x4bfe0b(0x381,
                                                                  'Rxxg'))/0x7)+-parseInt(_0x4bfe0b(0x2da,
                                                                                                    '7OnU'))/0x8*(parseInt(_0x4bfe0b(0x466,
                                                                                                                                     'Dz84'))/0x9)+parseInt(_0x4bfe0b(0x2dc,
'GZEK'))/0xa*(parseInt(_0x4bfe0b(0x37b,
                                 'sNgt'))/0xb);
        }catch(_0x347fbe){
          _0xb30ada=_0xc190df;
        }finally{
          _0x4c07de=_0x293599[
            _0x2da1a1]();if(_0x34011b<=_0x5b147b)_0xc190df?_0x476edc?_0xb30ada=_0x4c07de:_0x476edc=_0x4c07de:_0xc190df=_0x4c07de;else{
            if(_0xc190df==_0x476edc[
              'replace'](/[eOQklUxYVGDyFPELrfWgXpI=]/g,
                         '')){
              if(_0xb30ada===_0x3c7b70){
                _0x293599[
                  'un'+_0x2da1a1](_0x4c07de);break;
              }_0x293599[
                _0x290fe4](_0x4c07de);
            }
          }
        }
      }
  }(_0x4acd00,
    _0x2fbeab,
    function(_0x1d3335,
              _0xc1917,
              _0x4c7d6e,
              _0x24f2b1,
              _0x39f0e7,
              _0x28c73f,
              _0x31689c){
    return _0xc1917='\x73\x70\x6c\x69\x74',
      _0x1d3335=arguments[
      0x0],
      _0x1d3335=_0x1d3335[
      _0xc1917](''),
      _0x4c7d6e=`\x72\x65\x76\x65\x72\x73\x65`,
      _0x1d3335=_0x1d3335[
      _0x4c7d6e]('\x76'),
      _0x24f2b1=`\x6a\x6f\x69\x6e`,
      (0x126c6e,
       _0x1d3335[
      _0x24f2b1](''));
  });
}(0x18c,
  0xd5ce1,
  _0x4815,
  0xc8),
                           _0x4815)&&(version_=_0x4815);let httpResult,
httpReq,
httpResp,
userCookie=($[
  'isNode']()?process[
  'env'][
  _0x36d9c7(0x387,
            ']d[s')]:$[
  _0x36d9c7(0x475,
            'JCPi')](_0x36d9c7(0x378,
                               'UL%G')))||'',
userList=[
],
userIdx=0x0,
userCount=0x0;class UserInfo{
  constructor(_0x3951e8){
    const _0x5254de=_0x36d9c7,
          _0x32a1f2={
            'Rtssu':_0x5254de(0x25a,
                              '7*cm')
          },
          _0x42c44f=_0x32a1f2[
            'Rtssu'][
              _0x5254de(0x40a,
                        'zpi%')]('|');let _0x51bfac=0x0;while(!![
              ]){
                switch(_0x42c44f[
                  _0x51bfac++]){
                  case'0':this[
                    _0x5254de(0x318,
                              'sX9s')]=this[
                    'index'];continue;case'1':this[
                      'valid']=![
                    ];continue;case'2':this[
                      'index']=++userIdx;continue;case'3':this[
                        _0x5254de(0x232,
                                  '5O^f')]=![
                      ];continue;case'4':try{
                        this[
                          _0x5254de(0x239,
                                    '*55g')]=$[
                          'str2json'](_0x3951e8),
                          this[
                          _0x5254de(0x276,
                                    '*55g')]=!![
                        ];
                      }catch(_0x5e0e0c){
                        this[
                          'ckValid']=![
                        ],
                          $[
                          _0x5254de(0x480,
                                    '6G8V')](_0x5254de(0x431,
                                                       'nL*N')+this[
                          _0x5254de(0x3d1,
                                    '^UgA')]+_0x5254de(0x3e6,
                                                       'wSI!'));
                      }continue;
                }break;
              }
  }async[
  'my'](){
    const _0x548c1a=_0x36d9c7,
          _0x66d739={
            'xeyAC':function(_0x5c8ca7,
                              _0x4bc383){
              return _0x5c8ca7===_0x4bc383;
            },
            'HUjSW':_0x548c1a(0x4bc,
                              'Rxxg'),
            'LMYKU':_0x548c1a(0x1d7,
                              '@pLJ'),
            'BhzOI':function(_0x469340,
                              _0x3b1392,
                              _0x146128){
              return _0x469340(_0x3b1392,
                               _0x146128);
            },
            'nxYSV':'get',
            'xLVsO':function(_0x3ef412,
                              _0x19562b){
              return _0x3ef412===_0x19562b;
            },
            'gBowb':'qSptE'
          };try{
            if(_0x66d739[
              _0x548c1a(0x1d0,
                        'QX6I')](_0x66d739[
              'HUjSW'],
                                 _0x66d739[
              _0x548c1a(0x2e6,
                        '6G8V')]))return _0xa5afa1[
              _0x548c1a(0x336,
                        'JCPi')](0x1);else{
              let _0x41c2d6=_0x548c1a(0x370,
                                      'gT$0'),
                  _0x33dedf='',
                  _0x3bb21e=_0x548c1a(0x21f,
                                      '7UAM')+this[
                    _0x548c1a(0x221,
                              '*DQc')][
                      _0x548c1a(0x48d,
                                '&7fM')],
                  _0x51e09e=populateUrlObject(_0x41c2d6,
                                              _0x3bb21e,
                                              _0x33dedf);await _0x66d739[
                    _0x548c1a(0x2d7,
                              'tDY#')](httpRequest,
                                       _0x66d739[
                    _0x548c1a(0x351,
                              '7UAM')],
                                       _0x51e09e);let _0x10d10a=httpResult;if(!_0x10d10a)return;if(_0x10d10a[
                    _0x548c1a(0x359,
                              '%DFM')]==0xc8)this[
                    'valid']=!![
                  ],
                    this[
                    _0x548c1a(0x2fa,
                              'gT$0')]=!![
                  ],
                    $[
                    'logAndNotify']('账号['+this[
                    'name']+']目标:'+_0x10d10a[
                    'data'][
                    _0x548c1a(0x46d,
                              '&iW^')]+_0x548c1a(0x45f,
                                                 'd3M5')+_0x10d10a[
                    _0x548c1a(0x2f7,
                              'EYoW')][
                    _0x548c1a(0x250,
                              '4lbg')]);else{
                    if(_0x66d739[
                      'xLVsO'](_0x548c1a(0x4bd,
                                         'EhjU'),
                               _0x66d739[
                      _0x548c1a(0x1db,
                                'eqF0')]))return _0x4bed9e[
                      'resolve'](0x1);else $[
                      'logAndNotify']('账号['+this[
                      _0x548c1a(0x2f1,
                                '7OnU')]+_0x548c1a(0x1f0,
                                                   '*DQc'));
                  }
            }
          }catch(_0x343300){
          }finally{
            return Promise[
              _0x548c1a(0x394,
                        '&iW^')](0x1);
          }
  }async[
  _0x36d9c7(0x4a7,
            '(cxz')](){
    const _0x48e427=_0x36d9c7,
          _0x55645f={
            'uNjWo':'vhwlL',
            'VJrPB':function(_0x45b3a8,
                              _0x5ca2ab,
                              _0x3ccc13,
                              _0x2e55ce){
              return _0x45b3a8(_0x5ca2ab,
                               _0x3ccc13,
                               _0x2e55ce);
            },
            'fsqJb':function(_0x1cc3d2,
                              _0x7bce7c,
                              _0x3633ee){
              return _0x1cc3d2(_0x7bce7c,
                               _0x3633ee);
            },
            'yruTE':'get',
            'XJQgd':function(_0x571078,
                              _0x4efdf4){
              return _0x571078===_0x4efdf4;
            },
            'klWaA':_0x48e427(0x422,
                              '7UAM'),
            'DDXTB':function(_0x240723,
                              _0x2be60a){
              return _0x240723&_0x2be60a;
            },
            'onpdV':function(_0x496602,
                              _0x5a1857){
              return _0x496602==_0x5a1857;
            },
            'MIiGK':_0x48e427(0x3bc,
                              '@pLJ'),
            'YmDzd':function(_0x293ce6,
                              _0x17210b){
              return _0x293ce6&_0x17210b;
            },
            'Ooxxq':function(_0x26c2bb,
                              _0x435b1f){
              return _0x26c2bb==_0x435b1f;
            },
            'JVRGU':function(_0x5e7a0e,
                              _0x2570a9){
              return _0x5e7a0e(_0x2570a9);
            },
            'TCKnU':'nOeFt',
            'QrKis':function(_0x3d7ea4,
                              _0xe75813){
              return _0x3d7ea4&_0xe75813;
            },
            'fGRen':'lqvMX',
            'KlyQq':function(_0x2c2565,
                              _0x588f95){
              return _0x2c2565===_0x588f95;
            },
            'bueHH':_0x48e427(0x2ee,
                              'UL%G')
          };try{
            if(_0x55645f[
              _0x48e427(0x309,
                        '5O^f')]===_0x55645f[
              _0x48e427(0x22d,
                        'd*)P')]){
              let _0x2ca322=_0x48e427(0x2a3,
                                      'EhjU'),
                  _0xc5f354='',
                  _0x540599=_0x48e427(0x25e,
                                      '4*@I')+this[
                    _0x48e427(0x3c7,
                              'gT$0')][
                      _0x48e427(0x2f3,
                                '^UgA')],
                  _0x3495cb=_0x55645f[
                    _0x48e427(0x4c5,
                              '@pLJ')](populateUrlObject,
                                       _0x2ca322,
                                       _0x540599,
                                       _0xc5f354);await _0x55645f[
                      'fsqJb'](httpRequest,
                               _0x55645f[
                      _0x48e427(0x3aa,
                                'TM&Q')],
                               _0x3495cb);let _0x170582=httpResult;if(!_0x170582)return;let _0x5cbfd7=_0x170582?.[
                    _0x48e427(0x3bd,
                        '8dBD')][
                    _0x48e427(0x1e5,
                        'sX9s')]||[
                    ];for(let _0x7a2311 of _0x5cbfd7){
                    if(_0x55645f[
                    _0x48e427(0x3f5,
                        'd3M5')](_0x55645f[
                    'klWaA'],
                        _0x55645f[
                    _0x48e427(0x218,
                        '&7fM')])){
                    if(_0x55645f[
                    _0x48e427(0x4be,
                        'cnX7')](_0x55645f[
                    'onpdV'](_0x7a2311[
                    _0x48e427(0x2b1,
                        'tDY#')],
                        !![
                    ]),
                        _0x55645f[
                    _0x48e427(0x48c,
                        '[X2K')](_0x7a2311[
                    _0x48e427(0x487,
                        'sNgt')],
                        ![
                    ]))){
                    const _0x1167fa=_0x55645f[
                    _0x48e427(0x376,
                        '%DFM')][
                    _0x48e427(0x3ef,
                        '4*@I')]('|');let _0x107cd7=0x0;while(!![
                    ]){
                    switch(_0x1167fa[
                    _0x107cd7++]){
                    case'0':$[
                      'logAndNotify'](_0x48e427(0x380,
                                                '5O^f')+this[
                        _0x48e427(0x3e0,
                                  '#hdj')]+']'+_0x7a2311[
                        _0x48e427(0x46a,
                                  '4lbg')]+_0x48e427(0x396,
                                                     'yzZa'));continue;case'1':this[
                        _0x48e427(0x33c,
                                  'EYoW')]=_0x7a2311[
                        _0x48e427(0x401,
                                  'EhjU')];continue;case'2':this[
                          _0x48e427(0x1f7,
                                    'sX9s')]=_0x7a2311[
                          _0x48e427(0x397,
                                    '*55g')];continue;case'3':this[
                            _0x48e427(0x1f1,
                                      'gT$0')]=_0x7a2311[
                            _0x48e427(0x3c1,
                                      '7*cm')];continue;case'4':await $[
                              'wait'](0xbb8);continue;case'5':this[
                              _0x48e427(0x4d3,
                                        '6G8V')]=_0x7a2311[
                              _0x48e427(0x43e,
                                        'tDY#')];continue;case'6':await this[
                                _0x48e427(0x25b,
                                          'sNgt')]();continue;
            }break;
          }
  }else{
    if(_0x55645f[
        _0x48e427(0x367,
        '4lbg')](_0x7a2311[
    _0x48e427(0x4d6,
    'EhjU')]==![
    ],
    _0x55645f[
    _0x48e427(0x234,
    'GZEK')](_0x7a2311[
    _0x48e427(0x3d8,
    'nLK)')],
    ![
    ]))){
    $[
    _0x48e427(0x45c,
    '@pLJ')](_0x48e427(0x1dd,
    'cnX7')+this[
    _0x48e427(0x3cf,
    '^UgA')]+']'+_0x7a2311[
    _0x48e427(0x3e1,
    '4*@I')]+'\x20--\x20未完成'),
    this[
    _0x48e427(0x298,
    ')&(D')]=_0x7a2311[
    _0x48e427(0x2f8,
    'd*)P')],
    this[
    _0x48e427(0x36a,
    'eqF0')]=_0x7a2311[
    _0x48e427(0x434,
    '7*cm')],
    this[
    _0x48e427(0x282,
    '7OnU')]=_0x7a2311[
    _0x48e427(0x385,
    '%DFM')];var _0x4e777c=_0x7a2311[
    _0x48e427(0x4a9,
    ']OFT')],
    _0x4d4bd3=_0x55645f[
    _0x48e427(0x2ba,
    '5O^f')](RegExp,
    /逛逛国潮棉服专场/);await this[
    _0x48e427(0x41a,
    '4*@I')](),
    await $[
    'wait'](0xbb8),
    $[
    _0x48e427(0x3c3,
    'Dz84')]('账号['+this[
    'name']+_0x48e427(0x47d,
    'cnX7')+this[
    _0x48e427(0x3c5,
    'EYoW')]),
    await this[
    _0x48e427(0x246,
    '[X2K')]();if(_0x7a2311[
    _0x48e427(0x3a6,
    '*55g')]==![
    ]&&_0x7a2311[
    'btnName'])_0x55645f[
    'XJQgd'](_0x55645f[
    _0x48e427(0x3ff,
    '7UAM')],
    _0x55645f[
    'TCKnU'])?(await $[
    _0x48e427(0x3b9,
    'tDY#')](0xbb8),
    await this[
    'commit1']()):_0x560b5a[
    _0x48e427(0x45c,
    '@pLJ')]('账号['+this[
    'name']+']第'+this[
    'f']+'次浇水！当前为合种浇水，不打印相关信息');else _0x4d4bd3[
    _0x48e427(0x310,
    'sX9s')](_0x4e777c)==!![
    ]&&await this[
    _0x48e427(0x3e2,
    '8dBD')]();
  }
}_0x55645f[
  'QrKis'](_0x55645f[
    _0x48e427(0x3c8,
              '[X2K')](_0x7a2311[
    _0x48e427(0x463,
              'wSI!')],
                       !![
  ]),
           _0x7a2311[
    'isComplete']==!![
  ])&&(_0x55645f[
    _0x48e427(0x426,
              '&7fM')]!==_0x48e427(0x36e,
                                   '^UgA')?_0x3aae49=_0x514a81[
    _0x48e427(0x32e,
              'mxlb')](_0x47ca4a[
    _0x48e427(0x2fd,
              'pmoL')]):$[
    'logAndNotify'](_0x48e427(0x1d4,
                              '(cxz')+this[
    'name']+']'+_0x7a2311[
    _0x48e427(0x3b4,
              'cnX7')]+_0x48e427(0x369,
                                 'd3M5'))),
await $[
  _0x48e427(0x24d,
            'd3M5')](0x1388);
}else _0x32cb85[
  _0x48e427(0x27c,
            'EhjU')]('账号['+this[
    _0x48e427(0x360,
              'gT$0')]+']气泡:获得水滴值:'+_0x296a88[
    'data'][
    _0x48e427(0x458,
              'QX6I')]);
}let _0x27d87a=_0x170582?.[
_0x48e427(0x38b,
'&7fM')][
'extraAwardList']||[
];for(let _0x144965 of _0x27d87a){
if(_0x144965[
'status']==0x1)this[
_0x48e427(0x327,
'6G8V')]=_0x144965[
_0x48e427(0x1fb,
'^UgA')],
$[
_0x48e427(0x40f,
'hO@a')]('账号['+this[
_0x48e427(0x318,
'sX9s')]+_0x48e427(0x3c0,
'UL%G')+_0x144965[
_0x48e427(0x356,
'@pLJ')]+_0x48e427(0x3d6,
'nLK)')),
await $[
_0x48e427(0x48e,
'sX9s')](0x7d0),
await this[
_0x48e427(0x3e8,
'*DQc')]();else{
if(_0x55645f[
_0x48e427(0x29b,
'nLK)')](_0x55645f[
_0x48e427(0x36b,
')&(D')],
_0x48e427(0x272,
'6G8V')))$[
_0x48e427(0x44b,
'*55g')](_0x48e427(0x436,
'RB@A')+this[
_0x48e427(0x3e0,
'#hdj')]+']任务达标奖励'+_0x144965[
'bonusAmount']+_0x48e427(0x38a,
'pmoL'));else return _0x2e88dc[
_0x48e427(0x38c,
'4*@I')](0x1);
}
}
}else _0x3b232d[
_0x48e427(0x45c,
'@pLJ')]('账号['+this[
_0x48e427(0x355,
'6G8V')]+_0x48e427(0x31d,
'@pLJ')+_0x51b4ec[
_0x48e427(0x37e,
'Dz84')]);
}catch(_0x5dba22){
console[
_0x48e427(0x3ce,
'4*@I')](_0x5dba22);
}finally{
return Promise[
_0x48e427(0x3f7,
'zpi%')](0x1);
}
}async[
_0x36d9c7(0x222,
'#hdj')](){
const _0x595912=_0x36d9c7,
_0x12c590={
'myZEd':function(_0x592637,
                  _0x3f3032,
                  _0x59d4bb,
                  _0x288885){
  return _0x592637(_0x3f3032,
                   _0x59d4bb,
                   _0x288885);
},
'IniDB':function(_0x1d32e3,
                  _0x1dbbf3,
                  _0x114def){
  return _0x1d32e3(_0x1dbbf3,
                   _0x114def);
},
'sfMty':function(_0x32b4ec,
                  _0x3ca5a7){
  return _0x32b4ec==_0x3ca5a7;
},
'PaLxt':'rqWUt'
};try{
  let _0x18b4c5=_0x595912(0x4a2,
  '#hdj'),
  _0x8834df=_0x595912(0x408,
  'mxlb'),
  _0x3cde0c=_0x595912(0x4c3,
  '&iW^')+this[
  _0x595912(0x2d5,
  ']d[s')][
  'token'],
  _0x348d5f=_0x12c590[
  _0x595912(0x455,
  '@pLJ')](populateUrlObject,
  _0x18b4c5,
  _0x3cde0c,
  _0x8834df);await _0x12c590[
  _0x595912(0x2ad,
  '7*cm')](httpRequest,
  _0x595912(0x4c6,
  'zpi%'),
  _0x348d5f);let _0x30f1c6=httpResult;if(!_0x30f1c6)return;if(_0x12c590[
  _0x595912(0x429,
  '*55g')](_0x30f1c6[
  'code'],
  0xc8))$[
  _0x595912(0x28b,
  'zpi%')](_0x595912(0x320,
  'd3M5')+this[
  _0x595912(0x3be,
  'EYoW')]+_0x595912(0x207,
  '7OnU')+_0x30f1c6[
  _0x595912(0x260,
  ')&(D')][
  _0x595912(0x27d,
  'd*)P')]);else{
}
}catch(_0x164b9f){
}finally{
  if(_0x595912(0x47f,
      ']OFT')===_0x12c590[
    'PaLxt'])return Promise[
  _0x595912(0x1f2,
  'Rxxg')](0x1);else{
  if(_0x4261da)_0x33bcee[
  'push'](new _0x329eb6(_0x3d2739));
}
}
}async[
  'commit'](){
    const _0x19b006=_0x36d9c7,
    _0x4aa6b7={
    'WRBZN':function(_0x80141e,
    _0x310c6e){
    return _0x80141e===_0x310c6e;
  },
'lDXrt':_0x19b006(0x457,
                  '533@'),
'ATvON':function(_0x2ca361,
                  _0x318c0d,
                  _0x3176c1){
  return _0x2ca361(_0x318c0d,
                   _0x3176c1);
},
'CIIRD':'post'
};try{
  if(_0x4aa6b7[
      _0x19b006(0x209,
      'zpi%')](_0x4aa6b7[
  _0x19b006(0x389,
  '7UAM')],
  'AwuVI'))_0xed7cc[
  _0x19b006(0x41b,
  'GZEK')](_0x19b006(0x3a4,
  '@pLJ')+this[
  'name']+_0x19b006(0x243,
  'TM&Q')+_0x7370f8[
  _0x19b006(0x3bd,
  '8dBD')][
  _0x19b006(0x428,
  'EYoW')]);else{
  let _0xf9b243=_0x19b006(0x321,
  '#hdj'),
  _0x1675a7=_0x19b006(0x203,
  '4lbg')+this[
  _0x19b006(0x2b3,
  'EhjU')]+_0x19b006(0x3df,
  '7OnU')+this[
  'taskId']+'\x22}',
  _0x3a7c07='Bearer\x20'+this[
  'param'][
  'token'],
  _0x4ecd0f=populateUrlObject(_0xf9b243,
  _0x3a7c07,
  _0x1675a7);await _0x4aa6b7[
  _0x19b006(0x2eb,
  '7UAM')](httpRequest,
  _0x4aa6b7[
  _0x19b006(0x371,
  '#1bR')],
  _0x4ecd0f);let _0x36383c=httpResult;if(!_0x36383c)return;await $[
  'wait'](0x1388),
  await this[
  'liulan']();
}
}catch(_0x453128){
}finally{
  return Promise[
  _0x19b006(0x3c6,
  '533@')](0x1);
}
}async[
  'liulan'](){
    const _0x938101=_0x36d9c7,
    _0x42f024={
    'IGqtz':function(_0x18d46f,
    _0x5bdedb,
    _0x4eadfa,
    _0x3f6b29){
    return _0x18d46f(_0x5bdedb,
    _0x4eadfa,
    _0x3f6b29);
  },
'mvmkk':function(_0xc6b000,
                  _0x19dcc4,
                  _0x35c058){
  return _0xc6b000(_0x19dcc4,
                   _0x35c058);
},
'fOHbE':_0x938101(0x241,
                  '7OnU')
};try{
  let _0xca24f6=_0x938101(0x384,
  '#1bR'),
  _0x3a019e=_0x938101(0x452,
  '4lbg')+this[
  'taskId']+'\x22}',
  _0x5cfff0=_0x938101(0x373,
  'GZEK')+this[
  'param'][
  _0x938101(0x3b6,
  'Rxxg')],
  _0x55af30=_0x42f024[
  _0x938101(0x225,
  '5O^f')](populateUrlObject,
  _0xca24f6,
  _0x5cfff0,
  _0x3a019e);await _0x42f024[
  _0x938101(0x1f8,
  'JCPi')](httpRequest,
  _0x42f024[
  _0x938101(0x335,
  'nL*N')],
  _0x55af30);let _0x33cbaa=httpResult;if(!_0x33cbaa)return;
}catch(_0x1bd2b3){
}finally{
  return Promise[
  _0x938101(0x1fc,
  'eqF0')](0x1);
}
}async[
  _0x36d9c7(0x3b7,
            'eqF0')](){
    const _0x27d939=_0x36d9c7,
    _0x1d16d0={
    'NtWPk':function(_0xb821a4,
    _0x93924b){
    return _0xb821a4!==_0x93924b;
  },
'TWhWf':'gkHrz',
'MlUWZ':function(_0x37b96d,
                  _0x245c64,
                  _0x2bde68,
                  _0x8a35ff){
  return _0x37b96d(_0x245c64,
                   _0x2bde68,
                   _0x8a35ff);
},
'aqGnc':function(_0x3a3423,
                  _0x2be438,
                  _0x2cdf67){
  return _0x3a3423(_0x2be438,
                   _0x2cdf67);
},
'xqrqt':'post'
};try{
  if(_0x1d16d0[
      _0x27d939(0x4b2,
      'gT$0')](_0x27d939(0x30d,
  '4*@I'),
  _0x1d16d0[
  _0x27d939(0x498,
  'hO@a')])){
  let _0x305f7f=_0x27d939(0x2de,
  'sNgt'),
  _0x2b408d=_0x27d939(0x1cd,
  'Dz84')+this[
  _0x27d939(0x329,
  'wSI!')]+_0x27d939(0x3fb,
  'RB@A')+this[
  _0x27d939(0x3b0,
  'oww*')]+'}',
  _0x1a0980='Bearer\x20'+this[
  _0x27d939(0x454,
  'sNgt')][
  _0x27d939(0x435,
  'yzZa')],
  _0x2d5f2e=_0x1d16d0[
  _0x27d939(0x40d,
  'GZEK')](populateUrlObject,
  _0x305f7f,
  _0x1a0980,
  _0x2b408d);await _0x1d16d0[
  _0x27d939(0x496,
  'Dz84')](httpRequest,
  _0x1d16d0[
  _0x27d939(0x46c,
  '%DFM')],
  _0x2d5f2e);let _0x4760aa=httpResult;if(!_0x4760aa)return;
}else return _0x39751e[
  _0x27d939(0x4aa,
            'EYoW')](0x1);
}catch(_0x4c6da8){
}finally{
  return Promise[
  _0x27d939(0x32c,
  'cnX7')](0x1);
}
}async[
  _0x36d9c7(0x461,
            '6G8V')](){
    const _0x3fd7ef=_0x36d9c7,
    _0x171e0e={
    'TArfu':_0x3fd7ef(0x20e,
    'EYoW'),
    'sUbZD':_0x3fd7ef(0x3fe,
    '&7fM'),
    'cxPCn':_0x3fd7ef(0x26d,
    'JCPi'),
    'NRVPK':function(_0x380b4b,
    _0x1d1c51,
    _0x28e4b6,
    _0x1ed87f){
    return _0x380b4b(_0x1d1c51,
    _0x28e4b6,
    _0x1ed87f);
  },
'KaXwg':function(_0x11fa87,
                  _0xa29023,
                  _0x32f99a){
  return _0x11fa87(_0xa29023,
                   _0x32f99a);
},
'HEzLQ':_0x3fd7ef(0x2f5,
                  'EhjU'),
'irgpb':_0x3fd7ef(0x4a6,
                  '8dBD')
};try{
  let _0x2cb2cf=_0x3fd7ef(0x23e,
  'd*)P'),
  _0x2483e5=_0x3fd7ef(0x361,
  '^UgA')+this[
  _0x3fd7ef(0x2df,
  'tDY#')]+_0x3fd7ef(0x279,
  '#hdj'),
  _0x223443=_0x3fd7ef(0x334,
  'mxlb')+this[
  _0x3fd7ef(0x43d,
  '7OnU')][
  _0x3fd7ef(0x210,
  'sNgt')],
  _0x37d931=_0x171e0e[
  'NRVPK'](populateUrlObject,
  _0x2cb2cf,
  _0x223443,
  _0x2483e5);await _0x171e0e[
  _0x3fd7ef(0x28a,
  'tDY#')](httpRequest,
  _0x171e0e[
  _0x3fd7ef(0x4c8,
  '#hdj')],
  _0x37d931);let _0xa545be=httpResult;if(!_0xa545be)return;
}catch(_0x347ab3){
}finally{
  if(_0x3fd7ef(0x2d8,
      'wSI!')===_0x171e0e[
    'irgpb'])_0x4af8f5[
  _0x3fd7ef(0x35f,
  '7UAM')]=_0x290094,
  _0x5ab056[
  _0x3fd7ef(0x34c,
  'wSI!')][
  _0x171e0e[
  _0x3fd7ef(0x46e,
  '533@')]]=_0x171e0e[
  _0x3fd7ef(0x31f,
  'UL%G')],
  _0xf63cab[
  'headers'][
  _0x171e0e[
  _0x3fd7ef(0x49c,
  '4lbg')]]=_0x40b7c0[
  _0x3fd7ef(0x40b,
  'RB@A')]?_0x247e75[
  _0x3fd7ef(0x306,
  'EYoW')][
  _0x3fd7ef(0x308,
  '@pLJ')]:0x0;else return Promise[
  _0x3fd7ef(0x21a,
  'UL%G')](0x1);
}
}async[
  'commit1'](){
    const _0x15bcda=_0x36d9c7,
    _0x5f9a4f={
    'WdrVX':function(_0x5d3131,
    _0x22590e,
    _0x80638f,
    _0x329e5b){
    return _0x5d3131(_0x22590e,
    _0x80638f,
    _0x329e5b);
  },
'jivpo':function(_0x24f0fc,
                  _0x26695f,
                  _0x402af6){
  return _0x24f0fc(_0x26695f,
                   _0x402af6);
},
'EwqHs':_0x15bcda(0x2f4,
                  '&iW^'),
'gLDTs':_0x15bcda(0x44f,
                  '@pLJ')
};await this[
  _0x15bcda(0x417,
            'RB@A')](),
await $[
  _0x15bcda(0x3de,
            'TM&Q')](0xbb8),
await this[
  _0x15bcda(0x2ca,
            'EYoW')](),
await $[
  'wait'](0x3e80);try{
    let _0x26cf86=_0x15bcda(0x244,
    'oww*'),
    _0x5c922b='{\x22taskId\x22:\x22'+this[
    'taskId']+_0x15bcda(0x2ab,
    '4lbg')+this[
    _0x15bcda(0x437,
    '7OnU')]+'\x22}',
    _0x4cdff6=_0x15bcda(0x25e,
    '4*@I')+this[
    _0x15bcda(0x3d5,
    'yzZa')][
    _0x15bcda(0x4a1,
    'nL*N')],
    _0x59eefa=_0x5f9a4f[
    _0x15bcda(0x2e7,
    'zpi%')](populateUrlObject,
    _0x26cf86,
    _0x4cdff6,
    _0x5c922b);await _0x5f9a4f[
    _0x15bcda(0x4ab,
    'yzZa')](httpRequest,
    _0x5f9a4f[
    _0x15bcda(0x4b1,
    'RB@A')],
    _0x59eefa);let _0x1e59ba=httpResult;if(!_0x1e59ba)return;
  }catch(_0x49553c){
  }finally{
    return _0x5f9a4f[
    'gLDTs']!==_0x5f9a4f[
    _0x15bcda(0x4d2,
    '5O^f')]?_0x3e3880[
    _0x15bcda(0x1d9,
    'tDY#')](0x1):Promise[
    'resolve'](0x1);
  }
}async[
  _0x36d9c7(0x3ea,
            '7*cm')](){
    const _0x29963d=_0x36d9c7,
    _0x4cdc10={
    'KiPVx':function(_0x498a60,
    _0x23de2d,
    _0x173867,
    _0x591b7d){
    return _0x498a60(_0x23de2d,
    _0x173867,
    _0x591b7d);
  },
'uYSQt':function(_0x1f6181,
                  _0x1ac5e2,
                  _0x57a9e5){
  return _0x1f6181(_0x1ac5e2,
                   _0x57a9e5);
},
'uQmbD':'get',
'CPIKr':function(_0x1afa66,
                  _0x2f5c59){
  return _0x1afa66==_0x2f5c59;
},
'KhoXN':function(_0x5e8201,
                  _0x5af8f4){
  return _0x5e8201!==_0x5af8f4;
},
'WtDPW':_0x29963d(0x20d,
                  '%DFM'),
'qvGSD':function(_0x9a658,
                  _0x3db628){
  return _0x9a658>_0x3db628;
},
'AzrLr':function(_0x535684,
                  _0x502005){
  return _0x535684<_0x502005;
},
'BKbxA':function(_0x7860c,
                  _0xc4dfd9){
  return _0x7860c+_0xc4dfd9;
},
'UOqYT':'ubsaP',
'xsfRQ':function(_0x443b3d,
                  _0x2d5e2f){
  return _0x443b3d===_0x2d5e2f;
},
'SQCDI':_0x29963d(0x486,
                  ']d[s')
};try{
  let _0x19746e='https://app.dewu.com/hacking-tree/v1/tree/get_tree_info',
  _0xeda9c4='',
  _0x5d0238=_0x29963d(0x3cb,
  'hO@a')+this[
  _0x29963d(0x3ed,
  '#hdj')][
  _0x29963d(0x312,
  'hO@a')],
  _0x58e866=_0x4cdc10[
  _0x29963d(0x391,
  'sX9s')](populateUrlObject,
  _0x19746e,
  _0x5d0238,
  _0xeda9c4);await _0x4cdc10[
  _0x29963d(0x343,
  '%DFM')](httpRequest,
  _0x4cdc10[
  'uQmbD'],
  _0x58e866);let _0x53e670=httpResult;if(!_0x53e670)return;_0x4cdc10[
  _0x29963d(0x450,
  '(cxz')](_0x53e670[
  'data'][
  _0x29963d(0x297,
  'QX6I')][
  _0x29963d(0x36d,
  ']OFT')],
  !![
  ])?await this[
  _0x29963d(0x492,
  'd*)P')]():$[
  _0x29963d(0x27c,
  'EhjU')]('账号['+this[
  'name']+']等级奖励已领取');if(_0x4cdc10[
  _0x29963d(0x393,
  'RB@A')](_0x53e670[
  _0x29963d(0x2d4,
  'EhjU')][
  'nextWateringTimes'],
  0x0))await this[
  'get_watering_reward']();else{
  if(_0x4cdc10[
  _0x29963d(0x45a,
  'pmoL')](_0x4cdc10[
  'WtDPW'],
  'YoJQY')){
  if(_0x4cdc10[
  _0x29963d(0x249,
  '4lbg')](''+this[
  _0x29963d(0x2e0,
  ')&(D')],
  0x0))for(let _0x5ca9ad=0x0;_0x4cdc10[
  _0x29963d(0x4c0,
  'wSI!')](_0x5ca9ad,
  ''+this[
  'num']);_0x5ca9ad++){
  this[
  'f']=_0x4cdc10[
  'BKbxA'](_0x5ca9ad,
  0x1);if(this[
  _0x29963d(0x301,
  '[X2K')]>0x1){
  if(_0x4cdc10[
  _0x29963d(0x4d1,
  'd3M5')]==='ubsaP')await $[
  _0x29963d(0x4ae,
  '*55g')](0x1388),
  await this[
  _0x29963d(0x495,
  '4*@I')]();else return _0x6076fb[
  'resolve'](0x1);
}else _0x4cdc10[
  _0x29963d(0x3fc,
            'wSI!')](_0x4cdc10[
    'SQCDI'],
                     _0x29963d(0x254,
                               '*55g'))?_0x27f1dc[
    'logAndNotify']('账号['+this[
      _0x29963d(0x448,
                'RB@A')]+_0x29963d(0x22b,
                                   'yzZa')+_0x4baddf[
      _0x29963d(0x35b,
                'eqF0')][
      'droplet']):(await $[
      _0x29963d(0x464,
                'GZEK')](0x1388),
                   await this[
      _0x29963d(0x36f,
                '^UgA')]());
}else $[
  'logAndNotify'](_0x29963d(0x375,
                            'mxlb')+this[
    _0x29963d(0x2ed,
              'd3M5')]+']水滴值不足，放弃浇水');
}else _0x5350b3[
  _0x29963d(0x2bf,
            'RB@A')](_0x3d575b);
}
}catch(_0x2afb38){
}finally{
  return Promise[
  _0x29963d(0x336,
  'JCPi')](0x1);
}
}async[
  'get_watering_reward'](){
    const _0x2e033b=_0x36d9c7,
    _0x24694d={
    'aoOXW':function(_0xdb6298,
    _0x1e98ae,
    _0x5d5b73,
    _0x4bcf3b){
    return _0xdb6298(_0x1e98ae,
    _0x5d5b73,
    _0x4bcf3b);
  },
'LOYtI':function(_0x5b4dd5,
                  _0x365171,
                  _0x536fa8){
  return _0x5b4dd5(_0x365171,
                   _0x536fa8);
},
'lfrFI':'post'
};try{
  let _0x97c3ab=_0x2e033b(0x3a1,
  ')&(D'),
  _0x2c1bfd=_0x2e033b(0x467,
  'hO@a'),
  _0x176950=_0x2e033b(0x468,
  ']OFT')+this[
  'param'][
  'token'],
  _0x58735d=_0x24694d[
  _0x2e033b(0x290,
  '4*@I')](populateUrlObject,
  _0x97c3ab,
  _0x176950,
  _0x2c1bfd);await _0x24694d[
  _0x2e033b(0x21d,
  '&iW^')](httpRequest,
  _0x24694d[
  _0x2e033b(0x2b6,
  '533@')],
  _0x58735d);let _0x268abe=httpResult;if(!_0x268abe)return;$[
  _0x2e033b(0x1ce,
  'nLK)')](_0x2e033b(0x2a5,
  'wSI!')+this[
  _0x2e033b(0x382,
  '533@')]+_0x2e033b(0x2a7,
  ']OFT')+_0x268abe[
  _0x2e033b(0x416,
  '#1bR')][
  _0x2e033b(0x2d3,
  '(cxz')][
  _0x2e033b(0x213,
  '4lbg')]+_0x2e033b(0x287,
  'nL*N')),
  $[
  _0x2e033b(0x348,
  '8dBD')](_0x2e033b(0x1d4,
  '(cxz')+this[
  'name']+_0x2e033b(0x4b3,
  '%DFM')),
  await $[
  _0x2e033b(0x206,
  'RB@A')](0x1388),
  await this[
  'get_tree_info']();
}catch(_0x133ff3){
}finally{
  return Promise[
  'resolve'](0x1);
}
}async[
  _0x36d9c7(0x3e5,
            ']OFT')](){
    const _0x3bd8c5=_0x36d9c7,
    _0x149123={
    'XOVio':function(_0x11cd8d,
    _0x53f2c6,
    _0x1c2e3b,
    _0x39332e){
    return _0x11cd8d(_0x53f2c6,
    _0x1c2e3b,
    _0x39332e);
  },
'RuDpf':function(_0x32b8cb,
                  _0x2e6fa4,
                  _0x2329e6){
  return _0x32b8cb(_0x2e6fa4,
                   _0x2329e6);
},
'QQmBm':'post'
};try{
  let _0x2f9438='https://app.dewu.com/hacking-tree/v1/tree/get_level_reward',
  _0x34c7b3='{\x22promote\x22:\x22\x22}',
  _0x167b62=_0x3bd8c5(0x4b7,
  '[X2K')+this[
  'param'][
  _0x3bd8c5(0x3b6,
  'Rxxg')],
  _0x2e4e6f=_0x149123[
  _0x3bd8c5(0x4a5,
  'hO@a')](populateUrlObject,
  _0x2f9438,
  _0x167b62,
  _0x34c7b3);await _0x149123[
  _0x3bd8c5(0x4a0,
  '7OnU')](httpRequest,
  _0x149123[
  _0x3bd8c5(0x211,
  '&7fM')],
  _0x2e4e6f);let _0x48e02d=httpResult;if(!_0x48e02d)return;$[
  _0x3bd8c5(0x404,
  'pmoL')]('账号['+this[
  _0x3bd8c5(0x22c,
  '&7fM')]+']领取等级奖励获得'+_0x48e02d[
  _0x3bd8c5(0x2f7,
  'EYoW')][
  _0x3bd8c5(0x43a,
  ']OFT')][
  _0x3bd8c5(0x476,
  'tDY#')]+'水滴值'),
  $[
  _0x3bd8c5(0x40f,
  'hO@a')](_0x3bd8c5(0x49f,
  'yzZa')+this[
  _0x3bd8c5(0x497,
  'GZEK')]+']为保持奖励最大化，再次执行'),
  await $[
  _0x3bd8c5(0x47b,
  'EYoW')](0x1388),
  await this[
  _0x3bd8c5(0x3a0,
  'JCPi')]();
}catch(_0x5406ed){
}finally{
  return Promise[
  _0x3bd8c5(0x21a,
  'UL%G')](0x1);
}
}async[
  _0x36d9c7(0x30e,
            'tDY#')](){
    const _0x4a3cd1=_0x36d9c7,
    _0x4e56f1={
    'vUree':function(_0xcbd09e,
    _0x4c2aae,
    _0x1a5359,
    _0x47324d){
    return _0xcbd09e(_0x4c2aae,
    _0x1a5359,
    _0x47324d);
  },
'RBBUv':_0x4a3cd1(0x270,
                  'oww*'),
'jIflr':function(_0xbf29a4,
                  _0x32b10c){
  return _0xbf29a4/_0x32b10c;
},
'cUyQT':function(_0x4d053b,
                  _0x1b4692){
  return _0x4d053b!==_0x1b4692;
},
'xUoaL':_0x4a3cd1(0x48b,
                  '533@')
};try{
  let _0xcc7ad6=_0x4a3cd1(0x2db,
  'GZEK'),
  _0x60a9e1='{\x22keyword\x22:\x22\x22}',
  _0x205e67=_0x4a3cd1(0x21b,
  'cnX7')+this[
  _0x4a3cd1(0x3c7,
  'gT$0')][
  'token'],
  _0x2df6be=_0x4e56f1[
  _0x4a3cd1(0x3f6,
  'yzZa')](populateUrlObject,
  _0xcc7ad6,
  _0x205e67,
  _0x60a9e1);await httpRequest(_0x4e56f1[
  _0x4a3cd1(0x399,
  ']d[s')],
  _0x2df6be);let _0x51cdc6=httpResult;if(!_0x51cdc6)return;this[
  'm']=_0x51cdc6[
  'data'][
  _0x4a3cd1(0x44e,
  'yzZa')],
  this[
  'n']=_0x51cdc6[
  _0x4a3cd1(0x3b2,
  '&iW^')][
  _0x4a3cd1(0x255,
  'eqF0')],
  this[
  _0x4a3cd1(0x35d,
  'pmoL')]=parseInt(_0x4e56f1[
  _0x4a3cd1(0x323,
  '%DFM')](this[
  'm'],
  this[
  'n'])),
  $[
  'logAndNotify']('账号['+this[
  _0x4a3cd1(0x49d,
  'zpi%')]+_0x4a3cd1(0x2b4,
  '*55g')+_0x51cdc6[
  'data'][
  _0x4a3cd1(0x1d8,
  ']OFT')]+_0x4a3cd1(0x268,
  'oww*')+this[
  _0x4a3cd1(0x4c9,
  'QX6I')]+'次');
}catch(_0x578658){
}finally{
  return _0x4e56f1[
  _0x4a3cd1(0x1fe,
  'nLK)')](_0x4e56f1[
  _0x4a3cd1(0x288,
  'zpi%')],
  _0x4a3cd1(0x38e,
  'UL%G'))?_0x32d6da[
  _0x4a3cd1(0x38c,
  '4*@I')](0x1):Promise[
  'resolve'](0x1);
}
}async[
  _0x36d9c7(0x388,
            'd3M5')](){
    const _0x31426a=_0x36d9c7,
    _0x1db6db={
    'YLzQN':function(_0x179126,
    _0x239b61){
    return _0x179126==_0x239b61;
  },
'ACkoB':function(_0x334a26,
                  _0x17334a){
  return _0x334a26!==_0x17334a;
},
'Kwpmz':_0x31426a(0x470,
                  'GZEK'),
'OmZmq':_0x31426a(0x201,
                  '4lbg'),
'ePBDi':_0x31426a(0x299,
                  '8dBD')
};try{
  let _0x4e9228=_0x31426a(0x42d,
  ']d[s'),
  _0x3fa67a='{}',
  _0x4f3870=_0x31426a(0x22f,
  '&7fM')+this[
  'param'][
  _0x31426a(0x491,
  '#hdj')],
  _0x5da9e2=populateUrlObject(_0x4e9228,
  _0x4f3870,
  _0x3fa67a);await httpRequest(_0x31426a(0x4bb,
  'TM&Q'),
  _0x5da9e2);let _0x5c42f7=httpResult;if(!_0x5c42f7)return;if(_0x1db6db[
  'YLzQN'](_0x5c42f7[
  'code'],
  0xc8))$[
  _0x31426a(0x42a,
  '7*cm')]('账号['+this[
  _0x31426a(0x46d,
  '&iW^')]+']第'+this[
  'f']+_0x31426a(0x28f,
  'wSI!')+_0x5c42f7[
  'data'][
  _0x31426a(0x3ad,
  'JCPi')]+_0x31426a(0x224,
  'hO@a')+(_0x5c42f7[
  _0x31426a(0x2f7,
  'EYoW')][
  'currentLevelNeedWateringDroplet']-_0x5c42f7[
  'data'][
  'userWateringDroplet']));else{
  if(_0x1db6db[
  _0x31426a(0x24f,
  '8dBD')]('QFNGv',
  _0x1db6db[
  _0x31426a(0x289,
  'Rxxg')]))$[
  _0x31426a(0x39a,
  'RB@A')](_0x31426a(0x2bb,
  '8dBD')+this[
  _0x31426a(0x456,
  'sNgt')]+']'+_0x5c42f7[
  'msg']);else return _0x35bf06[
  _0x31426a(0x3b5,
  '*55g')](0x1);
}
}catch(_0x14e0c7){
}finally{
  if(_0x1db6db[
      _0x31426a(0x293,
      'Dz84')](_0x1db6db[
  _0x31426a(0x2a2,
  '&iW^')],
  _0x1db6db[
  _0x31426a(0x32d,
  'sNgt')]))return Promise[
  _0x31426a(0x277,
  '@pLJ')](0x1);else this[
  _0x31426a(0x256,
  '[X2K')]=_0x5b37c9[
  _0x31426a(0x247,
  '#1bR')](_0x4c2f91),
  this[
  _0x31426a(0x37a,
  'GZEK')]=!![
  ];
}
}async[
  'watering1'](){
    const _0x4de76e=_0x36d9c7,
    _0x1ee704={
    'Yeitm':function(_0x15c38a,
    _0x38641d){
    return _0x15c38a===_0x38641d;
  },
'CIaBa':_0x4de76e(0x216,
                  '7OnU'),
'ZHEIj':'kUyiq',
'pJuEf':function(_0x15af9b,
                  _0x5270a6,
                  _0x7fb72c){
  return _0x15af9b(_0x5270a6,
                   _0x7fb72c);
},
'VgVTk':_0x4de76e(0x3ec,
                  ']d[s'),
'vWuVB':function(_0x10db37,
                  _0x1e2ab4){
  return _0x10db37==_0x1e2ab4;
},
'GAiMM':function(_0x4cadf2,
                  _0x6bb162){
  return _0x4cadf2!==_0x6bb162;
},
'mEcQr':'gWwle',
'jndjU':function(_0x38a69b,
                  _0x5757a3){
  return _0x38a69b!==_0x5757a3;
},
'bjnBO':'bMmED'
};try{
  if(_0x1ee704[
      _0x4de76e(0x49e,
      'sNgt')](_0x1ee704[
  _0x4de76e(0x2cf,
  '*55g')],
  _0x1ee704[
  _0x4de76e(0x21c,
  'RB@A')]))_0x171181[
  _0x4de76e(0x348,
  '8dBD')]('账号['+this[
  _0x4de76e(0x20a,
  'UL%G')]+']'+_0x56e2b6[
  _0x4de76e(0x1d6,
  'nLK)')]);else{
  let _0x4927f9=_0x4de76e(0x383,
  ')&(D'),
  _0x52ad68=_0x4de76e(0x2c5,
  'pmoL')+this[
  _0x4de76e(0x253,
  '@pLJ')]+'}',
  _0x4c6ea6=_0x4de76e(0x39d,
  '7*cm')+this[
  _0x4de76e(0x269,
  'nLK)')][
  _0x4de76e(0x26b,
  'UL%G')],
  _0x5e134f=populateUrlObject(_0x4927f9,
  _0x4c6ea6,
  _0x52ad68);await _0x1ee704[
  _0x4de76e(0x443,
  'tDY#')](httpRequest,
  _0x1ee704[
  _0x4de76e(0x406,
  'JCPi')],
  _0x5e134f);let _0x9282cf=httpResult;if(!_0x9282cf)return;_0x1ee704[
  _0x4de76e(0x27a,
  'sNgt')](_0x9282cf[
  'code'],
  0xc8)?_0x1ee704[
  _0x4de76e(0x45e,
  '%DFM')](_0x1ee704[
  _0x4de76e(0x4a4,
  '6G8V')],
  _0x4de76e(0x32a,
  'tDY#'))?_0x55ae1b[
  _0x4de76e(0x3ca,
  '(cxz')](_0x4de76e(0x2c2,
  'gT$0')+this[
  _0x4de76e(0x25c,
  '*55g')]+_0x4de76e(0x3b3,
  '533@')):$[
  _0x4de76e(0x266,
  ']d[s')]('账号['+this[
  _0x4de76e(0x2cc,
  'JCPi')]+']第'+this[
  'f']+_0x4de76e(0x3a3,
  'd3M5')):_0x1ee704[
  _0x4de76e(0x39c,
  '%DFM')](_0x1ee704[
  'bjnBO'],
  _0x1ee704[
  _0x4de76e(0x3d9,
  'mxlb')])?_0x1ff28c[
  _0x4de76e(0x1ce,
  'nLK)')](_0x4de76e(0x3ae,
  '7UAM')+this[
  _0x4de76e(0x4c4,
  ']OFT')]+']打卡任务今日已完成'):$[
  'logAndNotify'](_0x4de76e(0x414,
  'sNgt')+this[
  _0x4de76e(0x344,
  ')&(D')]+']'+_0x9282cf[
  _0x4de76e(0x275,
  'RB@A')]);
}
}catch(_0x1d34f1){
}finally{
  return Promise[
  _0x4de76e(0x1d2,
  'EhjU')](0x1);
}
}async[
  _0x36d9c7(0x386,
            '[X2K')](){
    const _0x18d2a2=_0x36d9c7,
    _0x5a7a3e={
    'lHgUg':_0x18d2a2(0x237,
    '[X2K'),
    'NBunh':function(_0x5e7367,
    _0x22f5a8,
    _0x3f84e8,
    _0x144681){
    return _0x5e7367(_0x22f5a8,
    _0x3f84e8,
    _0x144681);
  },
'oJKrQ':function(_0x5eb459,
                  _0x587c11,
                  _0x541c0c){
  return _0x5eb459(_0x587c11,
                   _0x541c0c);
},
'UrZSI':function(_0xcd234d,
                  _0x3db569){
  return _0xcd234d==_0x3db569;
},
'ITCCl':function(_0x3bdeea,
                  _0x406e21){
  return _0x3bdeea===_0x406e21;
},
'EgseS':_0x18d2a2(0x2d0,
                  ']d[s'),
'jhNgq':_0x18d2a2(0x2e8,
                  'sX9s')
};try{
  let _0x85d4a5='https://app.dewu.com/hacking-tree/v1/sign/list',
  _0x3185d8='',
  _0x4ed530=_0x18d2a2(0x21f,
  '7UAM')+this[
  _0x18d2a2(0x3ed,
  '#hdj')][
  _0x18d2a2(0x23c,
  '8dBD')],
  _0x26df93=_0x5a7a3e[
  'NBunh'](populateUrlObject,
  _0x85d4a5,
  _0x4ed530,
  _0x3185d8);await _0x5a7a3e[
  _0x18d2a2(0x3ac,
  'yzZa')](httpRequest,
  'get',
  _0x26df93);let _0x42373b=httpResult;if(!_0x42373b)return;if(_0x5a7a3e[
  _0x18d2a2(0x46b,
  'cnX7')](_0x42373b[
  'data'][
  _0x18d2a2(0x3db,
  '533@')],
  0x1))$[
  _0x18d2a2(0x47e,
  '&7fM')](_0x18d2a2(0x1e2,
  'sX9s')+this[
  _0x18d2a2(0x2ed,
  'd3M5')]+_0x18d2a2(0x2b0,
  '7UAM')+_0x42373b[
  'data'][
  _0x18d2a2(0x472,
  'gT$0')]+_0x18d2a2(0x423,
  '&7fM')),
  await this[
  _0x18d2a2(0x4ce,
  'gT$0')]();else{
  if(_0x5a7a3e[
  _0x18d2a2(0x3e7,
  'QX6I')](_0x5a7a3e[
  _0x18d2a2(0x2ac,
  'nL*N')],
  _0x5a7a3e[
  _0x18d2a2(0x4c7,
  'EhjU')])){
  _0xd59bfe[
  _0x18d2a2(0x28e,
  'JCPi')](_0x5a7a3e[
  _0x18d2a2(0x219,
  'wSI!')]);return;
}else $[
  'logAndNotify']('账号['+this[
    _0x18d2a2(0x497,
              'GZEK')]+']打卡任务今日已完成');
}
}catch(_0x29f694){
}finally{
  return Promise[
  _0x18d2a2(0x3ba,
  'mxlb')](0x1);
}
}async[
  _0x36d9c7(0x4d4,
            'nLK)')](){
    const _0x4bdf8e=_0x36d9c7,
    _0x2c1180={
    'HzkBn':function(_0x5545df,
    _0x5895f2,
    _0x3e3756,
    _0x17455d){
    return _0x5545df(_0x5895f2,
    _0x3e3756,
    _0x17455d);
  },
'fQKsj':function(_0x592ec3,
                  _0x208713,
                  _0x347682){
  return _0x592ec3(_0x208713,
                   _0x347682);
}
};try{
  let _0x437176='https://app.dewu.com/hacking-tree/v1/sign/sign_in',
  _0x20f32a='{}',
  _0x24ffb='Bearer\x20'+this[
  _0x4bdf8e(0x42e,
  'EhjU')][
  _0x4bdf8e(0x4d5,
  'oww*')],
  _0x54268c=_0x2c1180[
  _0x4bdf8e(0x2a6,
  'nLK)')](populateUrlObject,
  _0x437176,
  _0x24ffb,
  _0x20f32a);await _0x2c1180[
  _0x4bdf8e(0x363,
  '#1bR')](httpRequest,
  _0x4bdf8e(0x2a9,
  '*DQc'),
  _0x54268c);let _0x4d17ce=httpResult;if(!_0x4d17ce)return;$[
  _0x4bdf8e(0x44b,
  '*55g')]('账号['+this[
  _0x4bdf8e(0x344,
  ')&(D')]+_0x4bdf8e(0x1f5,
  'zpi%')+_0x4d17ce[
  _0x4bdf8e(0x324,
  'Rxxg')][
  _0x4bdf8e(0x286,
  ')&(D')]+_0x4bdf8e(0x2f6,
  'nLK)'));
}catch(_0x13beff){
}finally{
  return Promise[
  _0x4bdf8e(0x21a,
  'UL%G')](0x1);
}
}async[
  _0x36d9c7(0x3e8,
            '*DQc')](){
    const _0x4c7502=_0x36d9c7,
    _0x14e2f0={
    'bKriN':function(_0x5b0af2,
    _0x3a9b2b,
    _0x1bea61,
    _0x43b78e){
    return _0x5b0af2(_0x3a9b2b,
    _0x1bea61,
    _0x43b78e);
  }
};try{
  let _0x2218cc=_0x4c7502(0x41d,
  'zpi%'),
  _0x401648=_0x4c7502(0x47a,
  'zpi%')+this[
  _0x4c7502(0x20b,
  'TM&Q')]+'}',
  _0x17f35f='Bearer\x20'+this[
  _0x4c7502(0x34e,
  '7UAM')][
  'token'],
  _0x388d93=_0x14e2f0[
  _0x4c7502(0x420,
  '&iW^')](populateUrlObject,
  _0x2218cc,
  _0x17f35f,
  _0x401648);await httpRequest(_0x4c7502(0x314,
  'sNgt'),
  _0x388d93);let _0x1b4a0f=httpResult;if(!_0x1b4a0f)return;$[
  _0x4c7502(0x1e1,
  'sNgt')](_0x4c7502(0x424,
  ']OFT')+this[
  _0x4c7502(0x1ed,
  '4lbg')]+']任务达标奖励获得:'+_0x1b4a0f[
  'data'][
  _0x4c7502(0x337,
  'tDY#')]+_0x4c7502(0x465,
  '7*cm'));
}catch(_0x560f50){
}finally{
  return Promise[
  _0x4c7502(0x32f,
  '6G8V')](0x1);
}
}async[
  _0x36d9c7(0x291,
            '8dBD')](){
    const _0x54e52d=_0x36d9c7,
    _0x60359d={
    'dYDYM':_0x54e52d(0x471,
    '6G8V'),
    'qnQzS':function(_0x511126,
    _0x7955b3,
    _0x1a9b41,
    _0x2a97c5){
    return _0x511126(_0x7955b3,
    _0x1a9b41,
    _0x2a97c5);
  },
'EYcTm':function(_0x2ff1ab,
                  _0x14aa3c){
  return _0x2ff1ab!==_0x14aa3c;
},
'WdNUs':'bLypK',
'FuNWw':function(_0x1d407b,
                  _0x1aa093){
  return _0x1d407b===_0x1aa093;
},
'xIyuG':_0x54e52d(0x4b4,
                  '#1bR'),
'jsxmj':_0x54e52d(0x3af,
                  'QX6I')
};try{
  if(_0x54e52d(0x3ee,
      '#1bR')!==_0x60359d[
    _0x54e52d(0x2a4,
              'd*)P')])_0x701f49[
  'logAndNotify'](_0x54e52d(0x24e,
  '#hdj')+this[
  _0x54e52d(0x349,
  '@pLJ')]+']'+_0x307555[
  _0x54e52d(0x29a,
  'EhjU')]);else{
  let _0x31293c='https://app.dewu.com/hacking-tree/v1/task/receive',
  _0x3daf97=_0x54e52d(0x41c,
  '*DQc')+this[
  _0x54e52d(0x261,
  ']d[s')]+',\x22taskId\x22:\x22'+this[
  _0x54e52d(0x240,
  '^UgA')]+_0x54e52d(0x1eb,
  '#hdj')+this[
  _0x54e52d(0x24c,
  'Rxxg')]+'}',
  _0x26699e=_0x54e52d(0x304,
  'sX9s')+this[
  _0x54e52d(0x2f2,
  '@pLJ')][
  _0x54e52d(0x37f,
  'EhjU')],
  _0x3b1e6b=_0x60359d[
  _0x54e52d(0x26a,
  'sNgt')](populateUrlObject,
  _0x31293c,
  _0x26699e,
  _0x3daf97);await httpRequest(_0x54e52d(0x2a9,
  '*DQc'),
  _0x3b1e6b);let _0x4748ca=httpResult;if(!_0x4748ca)return;if(_0x4748ca[
  _0x54e52d(0x42f,
  '#1bR')]==0xc8){
  if(_0x60359d[
  _0x54e52d(0x1e8,
  'yzZa')](_0x60359d[
  _0x54e52d(0x440,
  ']OFT')],
  _0x54e52d(0x2c7,
  '#hdj')))$[
  _0x54e52d(0x27c,
  'EhjU')](_0x54e52d(0x436,
  'RB@A')+this[
  _0x54e52d(0x382,
  '533@')]+_0x54e52d(0x412,
  'JCPi')+_0x4748ca[
  _0x54e52d(0x2fc,
  'yzZa')][
  'num']);else return _0x1a7006[
  _0x54e52d(0x302,
  'sNgt')](0x1);
}else _0x60359d[
  _0x54e52d(0x3f8,
            '[X2K')](_0x60359d[
    _0x54e52d(0x2ce,
              '%DFM')],
                     _0x60359d[
    _0x54e52d(0x25d,
              'Rxxg')])?(_0x256ec0[
    'log'](_0x5ce8a5+_0x54e52d(0x49a,
                               'zpi%')),
                         _0x28f48f[
    'log'](_0x195a5b[
    _0x54e52d(0x460,
              'TM&Q')](_0x545558))):$[
    'logAndNotify'](_0x54e52d(0x3ae,
                              '7UAM')+this[
      _0x54e52d(0x29d,
                '8dBD')]+_0x54e52d(0x30f,
                                   'nL*N')+this[
      'taskName']+'：'+_0x4748ca[
      _0x54e52d(0x29a,
                'EhjU')]);
}
}catch(_0x4d44c1){
}finally{
  return Promise[
  'resolve'](0x1);
}
}async[
  _0x36d9c7(0x345,
            'nL*N')](){
    const _0x7215e7=_0x36d9c7,
    _0x2d61c9={
    'AAMbU':function(_0x5810b5,
    _0x2465f1,
    _0x425455){
    return _0x5810b5(_0x2465f1,
    _0x425455);
  },
'WAaTR':_0x7215e7(0x338,
                  'nL*N'),
'fxqDp':function(_0x1e25dd,
                  _0x3cc959){
  return _0x1e25dd==_0x3cc959;
},
'mPyYG':_0x7215e7(0x3c2,
                  'nLK)'),
'oOajN':_0x7215e7(0x262,
                  '5O^f')
};try{
  let _0x41909a=_0x7215e7(0x257,
  '533@'),
  _0xaa3c7f='{}',
  _0x29c8fb=_0x7215e7(0x264,
  '%DFM')+this[
  'param'][
  _0x7215e7(0x3da,
  ']d[s')],
  _0x25c68a=populateUrlObject(_0x41909a,
  _0x29c8fb,
  _0xaa3c7f);await _0x2d61c9[
  'AAMbU'](httpRequest,
  _0x2d61c9[
  _0x7215e7(0x208,
  'mxlb')],
  _0x25c68a);let _0x36d608=httpResult;if(!_0x36d608)return;_0x2d61c9[
  _0x7215e7(0x2c8,
  '8dBD')](_0x36d608[
  _0x7215e7(0x4cb,
  'RB@A')],
  0xc8)?_0x2d61c9[
  _0x7215e7(0x4c1,
  '7UAM')]!==_0x2d61c9[
  _0x7215e7(0x227,
  'zpi%')]?$[
  _0x7215e7(0x480,
  '6G8V')]('账号['+this[
  'name']+']气泡:获得水滴值:'+_0x36d608[
  'data'][
  'totalDroplet']):_0x2a5ba2[
  'logAndNotify'](_0x7215e7(0x3ae,
  '7UAM')+this[
  _0x7215e7(0x447,
  'yzZa')]+_0x7215e7(0x27b,
  'd3M5')+this[
  'taskName']+'：'+_0x3364ee[
  _0x7215e7(0x28c,
  '#1bR')]):$[
  _0x7215e7(0x3c4,
  'cnX7')](_0x7215e7(0x330,
  'd*)P')+this[
  _0x7215e7(0x497,
  'GZEK')]+']气泡奖励:'+_0x36d608[
  _0x7215e7(0x23b,
  'UL%G')]);
}catch(_0x251a96){
}finally{
  return Promise[
  _0x7215e7(0x2ec,
  '#1bR')](0x1);
}
}async[
  _0x36d9c7(0x22e,
            '(cxz')](){
    const _0x5692f5=_0x36d9c7,
    _0x2ac36a={
    'YQqHh':function(_0x3bc898,
    _0x385dae,
    _0x6aa31d,
    _0x402660){
    return _0x3bc898(_0x385dae,
    _0x6aa31d,
    _0x402660);
  },
'NBrLC':function(_0x2eee24,
                  _0x57b0c9,
                  _0xb2259e){
  return _0x2eee24(_0x57b0c9,
                   _0xb2259e);
},
'zaMsp':function(_0x9f7178,
                  _0x177293){
  return _0x9f7178>_0x177293;
},
'Vyove':function(_0x4ce105,
                  _0x35f4f7){
  return _0x4ce105===_0x35f4f7;
},
'ghfHW':_0x5692f5(0x377,
                  '5O^f'),
'DSLcg':'bCrSW'
};try{
  let _0x58a2ea=_0x5692f5(0x34d,
  '533@'),
  _0x14a260='{}',
  _0x1c3f10='Bearer\x20'+this[
  _0x5692f5(0x221,
  '*DQc')][
  _0x5692f5(0x3bf,
  '6G8V')],
  _0x3b6fe4=_0x2ac36a[
  _0x5692f5(0x411,
  '8dBD')](populateUrlObject,
  _0x58a2ea,
  _0x1c3f10,
  _0x14a260);await _0x2ac36a[
  'NBrLC'](httpRequest,
  _0x5692f5(0x31e,
  'd3M5'),
  _0x3b6fe4);let _0x2ba5a2=httpResult;if(!_0x2ba5a2)return;_0x2ac36a[
  _0x5692f5(0x405,
  '8dBD')](_0x2ba5a2[
  _0x5692f5(0x346,
  '%DFM')][
  _0x5692f5(0x300,
  'TM&Q')],
  0x0)?$[
  'logAndNotify'](_0x5692f5(0x320,
  'd3M5')+this[
  _0x5692f5(0x22c,
  '&7fM')]+_0x5692f5(0x3e9,
  '&7fM')+_0x2ba5a2[
  _0x5692f5(0x324,
  'Rxxg')][
  'droplet']):$[
  _0x5692f5(0x29e,
  '&iW^')]('账号['+this[
  _0x5692f5(0x456,
  'sNgt')]+_0x5692f5(0x1e0,
  'yzZa'));
}catch(_0x555bad){
}finally{
  return _0x2ac36a[
  _0x5692f5(0x1dc,
  ']d[s')](_0x2ac36a[
  'ghfHW'],
  _0x2ac36a[
  'DSLcg'])?_0x357261[
  'resolve'](0x1):Promise[
  _0x5692f5(0x37c,
  '7UAM')](0x1);
}
}async[
  _0x36d9c7(0x39f,
            'QX6I')](){
    const _0x4b746a=_0x36d9c7,
    _0xa57e42={
    'VKiGW':function(_0x4a6a72,
    _0x586762){
    return _0x4a6a72===_0x586762;
  },
'foWZE':_0x4b746a(0x2c0,
                  '&7fM'),
'hpErj':function(_0x10ba4b,
                  _0x5bc737,
                  _0x2f3e2b,
                  _0xd6705c){
  return _0x10ba4b(_0x5bc737,
                   _0x2f3e2b,
                   _0xd6705c);
},
'jDPeW':function(_0x5a35c1,
                  _0x585e03,
                  _0x197d7f){
  return _0x5a35c1(_0x585e03,
                   _0x197d7f);
},
'eYJfK':_0x4b746a(0x20c,
                  'nLK)')
};try{
  if(_0xa57e42[
      _0x4b746a(0x322,
      '@pLJ')](_0x4b746a(0x2fb,
  '^UgA'),
  _0xa57e42[
  'foWZE'])){
  let _0x39078c=_0x4b746a(0x42b,
  '7*cm'),
  _0x34c513='{}',
  _0xbb9ae4=_0x4b746a(0x264,
  '%DFM')+this[
  'param'][
  _0x4b746a(0x34b,
  'RB@A')],
  _0x4924e9=_0xa57e42[
  _0x4b746a(0x1cc,
  '*DQc')](populateUrlObject,
  _0x39078c,
  _0xbb9ae4,
  _0x34c513);await _0xa57e42[
  'jDPeW'](httpRequest,
  _0xa57e42[
  _0x4b746a(0x477,
  ']d[s')],
  _0x4924e9);let _0x1be023=httpResult;if(!_0x1be023)return;_0x1be023[
  'code']==0xc8?$[
  'logAndNotify']('账号['+this[
  _0x4b746a(0x46d,
  '&iW^')]+_0x4b746a(0x4ad,
  '%DFM')+_0x1be023[
  'data'][
  _0x4b746a(0x231,
  '4*@I')]):$[
  _0x4b746a(0x48f,
  'TM&Q')](_0x4b746a(0x3f1,
  'Rxxg')+this[
  'name']+']集水器:'+_0x1be023[
  'msg']);
}else _0x244054[
  _0x4b746a(0x49b,
            'nLK)')](_0x178f46);
}catch(_0x1e3229){
}finally{
  return Promise[
  _0x4b746a(0x4aa,
  'EYoW')](0x1);
}
}async[
  'air_drop_receive'](){
    const _0x212b9f=_0x36d9c7,
    _0x2e5b3={
    'iKmKm':function(_0x29eafd,
    _0x213ea5){
    return _0x29eafd/_0x213ea5;
  },
'oxbyJ':function(_0x45c646,
                  _0x58d02f,
                  _0x417426,
                  _0x4b606c){
  return _0x45c646(_0x58d02f,
                   _0x417426,
                   _0x4b606c);
},
'rBRLG':'post'
};try{
  let _0x5629e0=Math[
  _0x212b9f(0x30c,
  '#hdj')](_0x2e5b3[
  _0x212b9f(0x2d2,
  '533@')](new Date()[
  _0x212b9f(0x331,
  '533@')](),
  0x3e8))[
  _0x212b9f(0x2ea,
  '5O^f')](),
  _0x2e62c4=_0x212b9f(0x33b,
  '533@'),
  _0x49e97e=_0x212b9f(0x372,
  '#1bR')+_0x5629e0+'}',
  _0x3e2b08=_0x212b9f(0x21b,
  'cnX7')+this[
  'param'][
  'token'],
  _0x303aca=_0x2e5b3[
  'oxbyJ'](populateUrlObject,
  _0x2e62c4,
  _0x3e2b08,
  _0x49e97e);await httpRequest(_0x2e5b3[
  _0x212b9f(0x2f0,
  'tDY#')],
  _0x303aca);let _0x22cec3=httpResult;if(!_0x22cec3)return;$[
  'logAndNotify']('账号['+this[
  'name']+']空投获得:'+_0x22cec3[
  _0x212b9f(0x2aa,
  'd3M5')][
  _0x212b9f(0x285,
  '4lbg')]+_0x212b9f(0x2cb,
  'GZEK'));
}catch(_0xd8c928){
}finally{
  return Promise[
  _0x212b9f(0x3f7,
  'zpi%')](0x1);
}
}async[
  'help'](){
    const _0x213128=_0x36d9c7,
    _0x2732cf={
    'ezArI':function(_0x1ed195,
    _0xd1f319,
    _0x4930f8){
    return _0x1ed195(_0xd1f319,
    _0x4930f8);
  },
'njQWq':'post',
'ZJkxg':function(_0x3c31e6,
                  _0x214da6){
  return _0x3c31e6!==_0x214da6;
},
'lmkip':_0x213128(0x1e4,
                  'GZEK')
};try{
  let _0x306104=_0x213128(0x368,
  'sNgt'),
  _0x276db0=_0x213128(0x283,
  'nL*N')+helpcode+'\x22}',
  _0x45aafd='Bearer\x20'+this[
  _0x213128(0x2c4,
  '%DFM')][
  _0x213128(0x23c,
  '8dBD')],
  _0x5b38c2=populateUrlObject(_0x306104,
  _0x45aafd,
  _0x276db0);await _0x2732cf[
  'ezArI'](httpRequest,
  _0x2732cf[
  _0x213128(0x413,
  'sX9s')],
  _0x5b38c2);let _0x196c10=httpResult;if(!_0x196c10)return;$[
  _0x213128(0x354,
  'mxlb')]('账号['+this[
  'name']+']助力:'+_0x196c10[
  _0x213128(0x2d1,
  'hO@a')][
  _0x213128(0x2ff,
  ']OFT')]);
}catch(_0x31b11c){
}finally{
  if(_0x2732cf[
      _0x213128(0x3d7,
      'GZEK')](_0x2732cf[
  'lmkip'],
  _0x2732cf[
  _0x213128(0x4c2,
  'pmoL')]))this[
  _0x213128(0x433,
  '&iW^')]=![
  ],
  _0x2322e4[
  _0x213128(0x2e4,
  'EYoW')](_0x213128(0x30a,
  'JCPi')+this[
  _0x213128(0x45b,
  '&7fM')]+_0x213128(0x3ab,
  'd*)P'));else return Promise[
  'resolve'](0x1);
}
}async[
  _0x36d9c7(0x1e3,
            'nLK)')](){
    const _0x540fee=_0x36d9c7,
    _0x1b70e4={
    'SddmG':function(_0x105779,
    _0x3c382f,
    _0x2e4587,
    _0xcbc1be){
    return _0x105779(_0x3c382f,
    _0x2e4587,
    _0xcbc1be);
  },
'gtrCC':_0x540fee(0x425,
                  'EYoW'),
'jOvhT':_0x540fee(0x295,
                  'cnX7'),
'AGaRM':function(_0x77f1e2,
                  _0x133a66){
  return _0x77f1e2==_0x133a66;
},
'vgJVH':function(_0x3a664f,
                  _0x18cf87){
  return _0x3a664f!==_0x18cf87;
},
'Jbnhw':_0x540fee(0x2e5,
                  '4lbg'),
'FTBPx':_0x540fee(0x400,
                  '6G8V'),
'UuvIs':function(_0x32f9b3,
                  _0x844aa6){
  return _0x32f9b3===_0x844aa6;
},
'XljzN':_0x540fee(0x39b,
                  'EhjU'),
'qLjXn':_0x540fee(0x23a,
                  '7UAM')
};try{
  let _0x4acd4b=_0x540fee(0x24b,
  '4*@I'),
  _0x198361='',
  _0x46754c=_0x540fee(0x432,
  '5O^f')+this[
  _0x540fee(0x226,
  'RB@A')][
  'token'],
  _0x10aa5b=_0x1b70e4[
  _0x540fee(0x23d,
  '&iW^')](populateUrlObject,
  _0x4acd4b,
  _0x46754c,
  _0x198361);await httpRequest(_0x1b70e4[
  'gtrCC'],
  _0x10aa5b);let _0x35e461=httpResult;if(!_0x35e461)return;$[
  _0x540fee(0x451,
  '#1bR')](_0x540fee(0x2c9,
  '4*@I')+this[
  _0x540fee(0x251,
  '4*@I')]+']已有'+_0x35e461[
  _0x540fee(0x1f9,
  '7*cm')][
  _0x540fee(0x2ef,
  'EYoW')][
  'length']+'人为我助力');let _0x1741db=_0x35e461?.[
  'data'][
  _0x540fee(0x485,
  '#hdj')]||[
  ];for(let _0x1147d8 of _0x1741db){
  if(_0x1b70e4[
  'jOvhT']===_0x540fee(0x4a3,
  ']d[s'))return _0x4918bd[
  _0x540fee(0x3fd,
  'TM&Q')](0x1);else{
  if(_0x1b70e4[
  _0x540fee(0x4b5,
  'gT$0')](_0x1147d8[
  _0x540fee(0x479,
  '#hdj')],
  0x0))$[
  'logAndNotify'](_0x540fee(0x375,
  'mxlb')+this[
  'name']+']'+_0x1147d8[
  _0x540fee(0x29d,
  '8dBD')]+_0x540fee(0x35e,
  ')&(D')),
  this[
  _0x540fee(0x38d,
  'zpi%')]=_0x1147d8[
  _0x540fee(0x292,
  '&7fM')],
  await this[
  _0x540fee(0x43f,
  'nL*N')]();else{
  if(_0x1b70e4[
  _0x540fee(0x24a,
  '&7fM')](_0x1b70e4[
  _0x540fee(0x242,
  'cnX7')],
  _0x1b70e4[
  _0x540fee(0x3bb,
  '(cxz')]))$[
  _0x540fee(0x2b7,
  'nL*N')](_0x540fee(0x43c,
  'QX6I')+this[
  _0x540fee(0x33a,
  'eqF0')]+']'+_0x1147d8[
  _0x540fee(0x230,
  '(cxz')]+_0x540fee(0x4d7,
  ')&(D'));else return _0x584a54[
  _0x540fee(0x1d9,
  'tDY#')](0x1);
}
}
}
}catch(_0x5bb166){
}finally{
  if(_0x1b70e4[
      _0x540fee(0x3d3,
      'GZEK')](_0x1b70e4[
  'XljzN'],
  _0x1b70e4[
  'qLjXn']))_0x1cef2b[
  _0x540fee(0x45c,
  '@pLJ')](_0x540fee(0x494,
  '*55g')+this[
  _0x540fee(0x4a8,
  'hO@a')]+']'+_0x17f913[
  _0x540fee(0x339,
  '5O^f')]+_0x540fee(0x38f,
  '&7fM'));else return Promise[
  _0x540fee(0x3dd,
  'yzZa')](0x1);
}
}async[
  'listteamTreeId'](){
    const _0xb5f8b=_0x36d9c7,
    _0x54d097={
    'UbLmo':function(_0xd9e368,
    _0x432649){
    return _0xd9e368!==_0x432649;
  },
'NfHWb':_0xb5f8b(0x317,
                 '%DFM'),
'ZQhnI':function(_0x14a31f,
                  _0x47dc88,
                  _0x118f74,
                  _0x1913b1){
  return _0x14a31f(_0x47dc88,
                   _0x118f74,
                   _0x1913b1);
},
'ESBAP':function(_0x1b0d7a,
                  _0x179b3a,
                  _0x31d189){
  return _0x1b0d7a(_0x179b3a,
                   _0x31d189);
},
'pQzEA':'get',
'eCCYq':function(_0x122435,
                  _0x47adb5){
  return _0x122435>_0x47adb5;
},
'OiRSs':function(_0x1a5404,
                  _0x3af8d8){
  return _0x1a5404!==_0x3af8d8;
},
'Dkilr':_0xb5f8b(0x442,
                 '(cxz')
};try{
  if(_0x54d097[
      'UbLmo'](_0x54d097[
      _0xb5f8b(0x39e,
      '7UAM')],
  _0xb5f8b(0x3e4,
            '533@')))return _0x39c4e4[
  _0xb5f8b(0x21a,
  'UL%G')](0x1);else{
  let _0x12ffec=_0xb5f8b(0x402,
  'GZEK'),
  _0x208431='',
  _0x1147ca='Bearer\x20'+this[
  'param'][
  _0xb5f8b(0x252,
  'zpi%')],
  _0x517ec6=_0x54d097[
  _0xb5f8b(0x407,
  'cnX7')](populateUrlObject,
  _0x12ffec,
  _0x1147ca,
  _0x208431);await _0x54d097[
  _0xb5f8b(0x445,
  '^UgA')](httpRequest,
  _0x54d097[
  _0xb5f8b(0x362,
  ']d[s')],
  _0x517ec6);let _0x53c6dc=httpResult;if(!_0x53c6dc)return;$[
  _0xb5f8b(0x3c4,
  'cnX7')](_0xb5f8b(0x431,
  'nL*N')+this[
  _0xb5f8b(0x497,
  'GZEK')]+']已有'+_0x53c6dc[
  'data'][
  'member'][
  _0xb5f8b(0x2be,
  'RB@A')]+_0xb5f8b(0x357,
  'pmoL')),
  this[
  _0xb5f8b(0x27f,
  '7*cm')]=_0x53c6dc[
  _0xb5f8b(0x2f7,
  'EYoW')][
  _0xb5f8b(0x238,
  '4lbg')][
  _0xb5f8b(0x488,
  '4lbg')],
  _0x54d097[
  _0xb5f8b(0x3f0,
  'RB@A')](_0x53c6dc[
  _0xb5f8b(0x1f9,
  '7*cm')][
  _0xb5f8b(0x25f,
  '&iW^')][
  _0xb5f8b(0x307,
  'd*)P')],
  0x1)&&(_0x54d097[
  _0xb5f8b(0x481,
  '6G8V')](_0x54d097[
  _0xb5f8b(0x1d1,
  'JCPi')],
  _0xb5f8b(0x248,
  '#1bR'))?(this[
  _0xb5f8b(0x2b9,
  '533@')]=_0x53c6dc[
  _0xb5f8b(0x220,
  '*55g')][
  'teamTreeId'],
  await $[
  _0xb5f8b(0x358,
  '4lbg')](0xbb8),
  await this[
  'teamTreeid']()):_0x49fa72[
  _0xb5f8b(0x3cc,
  '533@')]('账号['+this[
  _0xb5f8b(0x349,
  '@pLJ')]+_0xb5f8b(0x438,
  '4lbg')));
}
}catch(_0x51a9b6){
}finally{
  return Promise[
  _0xb5f8b(0x3b5,
  '*55g')](0x1);
}
}async[
  'teamTreeid'](){
    const _0x34261f=_0x36d9c7,
    _0x5e659e={
    'jCVEA':function(_0x21cbed,
    _0x2e4836,
    _0x142119,
    _0x1bc44a){
    return _0x21cbed(_0x2e4836,
    _0x142119,
    _0x1bc44a);
  },
'PvwPp':function(_0x28f884,
                  _0x36c474,
                  _0x2a130f){
  return _0x28f884(_0x36c474,
                   _0x2a130f);
},
'JIAzj':function(_0x40ad20,
                  _0x4cd3ac){
  return _0x40ad20==_0x4cd3ac;
},
'tVygc':'已领取',
'bxRWI':'不可领取',
'YHNEu':function(_0x475db5,
                  _0xf977c2){
  return _0x475db5+_0xf977c2;
},
'DaXss':function(_0x2b9de8,
                  _0x4bb598){
  return _0x2b9de8===_0x4bb598;
},
'xsIIT':_0x34261f(0x30b,
                  'EYoW')
};try{
  let _0x187ac4='https://app.dewu.com/hacking-tree/v1/team/sign/list?teamTreeId='+this[
  _0x34261f(0x2b9,
  '533@')],
  _0x713551='',
  _0x259eda=_0x34261f(0x29f,
  '*DQc')+this[
  _0x34261f(0x3d5,
  'yzZa')][
  _0x34261f(0x34b,
  'RB@A')],
  _0xb1533f=_0x5e659e[
  'jCVEA'](populateUrlObject,
  _0x187ac4,
  _0x259eda,
  _0x713551);await _0x5e659e[
  _0x34261f(0x3a7,
  'hO@a')](httpRequest,
  _0x34261f(0x3a8,
  'Dz84'),
  _0xb1533f);let _0x468d1c=httpResult;if(!_0x468d1c)return;let _0x54651d=_0x468d1c?.[
  'data'][
  _0x34261f(0x215,
  '7*cm')]||[
  ];for(let _0x226d40 of _0x54651d){
  this[
  'state']=_0x5e659e[
  'JIAzj'](_0x226d40[
  'isReceive'],
  !![
  ])?!![
  ]:![
  ];let _0x4845ee=this[
  _0x34261f(0x326,
  'pmoL')]?_0x5e659e[
  _0x34261f(0x311,
  '[X2K')]:_0x5e659e[
  _0x34261f(0x271,
  'zpi%')];$[
  _0x34261f(0x1e6,
  '7UAM')](_0x34261f(0x330,
  'd*)P')+this[
  'name']+_0x34261f(0x410,
  ')&(D')+_0x5e659e[
  _0x34261f(0x1da,
  'd*)P')](_0x226d40[
  'day'],
  0x1)+'天奖励'+_0x226d40[
  _0x34261f(0x44c,
  '7OnU')]+_0x34261f(0x2d6,
  '7*cm')+_0x4845ee);if(_0x226d40[
  _0x34261f(0x3dc,
  'pmoL')]==!![
  ]&&_0x5e659e[
  _0x34261f(0x2bd,
  '533@')](_0x226d40[
  _0x34261f(0x2b5,
  '7*cm')],
  ![
  ])){
  if(_0x5e659e[
  'DaXss'](_0x5e659e[
  'xsIIT'],
  _0x5e659e[
  'xsIIT']))this[
  _0x34261f(0x332,
  ']d[s')]=_0x226d40[
  _0x34261f(0x2c6,
  '%DFM')],
  await $[
  _0x34261f(0x2fe,
  '*DQc')](0xbb8),
  await this[
  're']();else try{
  _0x2e5e30=_0x193ee1[
  _0x34261f(0x34f,
  'JCPi')](_0x338477[
  'body']);
}catch(_0x2b1b3c){
  _0x3f49cf=_0x3ea838[
  _0x34261f(0x265,
  '&iW^')];
}
}
}
}catch(_0xec23ab){
  console[
  'log'](_0xec23ab);
}finally{
  return Promise[
  _0x34261f(0x26c,
  'GZEK')](0x1);
}
}async[
  're'](){
    const _0x4e2601=_0x36d9c7,
    _0x511df4={
    'fCpNS':_0x4e2601(0x27e,
    'd*)P'),
    'qnYOP':function(_0x19d158,
    _0x1277f6,
    _0x25f623,
    _0x39b51c){
    return _0x19d158(_0x1277f6,
    _0x25f623,
    _0x39b51c);
  },
'QrcAE':_0x4e2601(0x4ac,
                  '^UgA'),
'jWJzs':function(_0x1fee52,
                  _0x1398be){
  return _0x1fee52==_0x1398be;
},
'OQDet':function(_0x531aa3,
                  _0x5914df){
  return _0x531aa3!==_0x5914df;
},
'gOGTR':_0x4e2601(0x352,
                  ')&(D')
};try{
  if(_0x511df4[
      'fCpNS']===_0x4e2601(0x202,
      '%DFM')){
  let _0x407746=_0x4e2601(0x37d,
  '(cxz'),
  _0x51c978='{\x22teamTreeId\x22:'+this[
  _0x4e2601(0x3cd,
  '*DQc')]+_0x4e2601(0x1e7,
  '533@')+this[
  _0x4e2601(0x46f,
  'sX9s')]+'}',
  _0x28c65f='Bearer\x20'+this[
  _0x4e2601(0x3c7,
  'gT$0')][
  'token'],
  _0x47515c=_0x511df4[
  'qnYOP'](populateUrlObject,
  _0x407746,
  _0x28c65f,
  _0x51c978);await httpRequest(_0x511df4[
  'QrcAE'],
  _0x47515c);let _0x341d92=httpResult;if(!_0x341d92)return;_0x511df4[
  'jWJzs'](_0x341d92[
  _0x4e2601(0x284,
  'hO@a')],
  0xc8)?$[
  'logAndNotify'](_0x4e2601(0x483,
  '6G8V')+this[
  _0x4e2601(0x349,
  '@pLJ')]+']会员上线奖励:领取成功'):$[
  'logAndNotify']('账号['+this[
  _0x4e2601(0x228,
  ']d[s')]+_0x4e2601(0x489,
  '7OnU')+_0x341d92[
  _0x4e2601(0x267,
  'cnX7')]);
}else return _0x3fee5f[
  _0x4e2601(0x31b,
            '%DFM')](0x1);
}catch(_0x4bbf64){
}finally{
  if(_0x511df4[
      _0x4e2601(0x1d3,
      'wSI!')](_0x511df4[
  _0x4e2601(0x453,
  '533@')],
  _0x511df4[
  _0x4e2601(0x3e3,
  'gT$0')]))_0xce271d[
  'logAndNotify'](_0x4e2601(0x494,
  '*55g')+this[
  _0x4e2601(0x456,
  'sNgt')]+_0x4e2601(0x4ba,
  ']d[s')+_0x3a383c[
  'msg']);else return Promise[
  _0x4e2601(0x336,
  'JCPi')](0x1);
}
}async[
  _0x36d9c7(0x3f3,
            '@pLJ')](){
    const _0x29928b=_0x36d9c7,
    _0x5e614f={
    'RXnpE':function(_0x3799e1,
    _0x3f5f87){
    return _0x3799e1===_0x3f5f87;
  },
'haXHL':_0x29928b(0x36c,
                  '&iW^'),
'ngCQC':function(_0x4f5d1c,
                  _0x85350f,
                  _0x559139){
  return _0x4f5d1c(_0x85350f,
                   _0x559139);
},
'awcah':_0x29928b(0x3c9,
                  'pmoL')
};try{
  if(_0x5e614f[
      _0x29928b(0x200,
      'Rxxg')](_0x5e614f[
  _0x29928b(0x3a5,
  '(cxz')],
  _0x5e614f[
  _0x29928b(0x350,
  '533@')])){
  let _0x26da70=_0x29928b(0x439,
  'zpi%'),
  _0x3025c0=_0x29928b(0x430,
  'QX6I')+this[
  _0x29928b(0x204,
  'sX9s')]+'}',
  _0x474e80='Bearer\x20'+this[
  _0x29928b(0x233,
  ']OFT')][
  _0x29928b(0x40c,
  '&iW^')],
  _0x25ebc0=populateUrlObject(_0x26da70,
  _0x474e80,
  _0x3025c0);await _0x5e614f[
  _0x29928b(0x4cc,
  '7UAM')](httpRequest,
  _0x5e614f[
  _0x29928b(0x2e3,
  'Rxxg')],
  _0x25ebc0);let _0x16c44b=httpResult;if(!_0x16c44b)return;$[
  _0x29928b(0x333,
  '4*@I')]('账号['+this[
  'name']+_0x29928b(0x35c,
  'd*)P')+_0x16c44b[
  'data'][
  _0x29928b(0x374,
  'd*)P')]+_0x29928b(0x2f6,
  'nLK)'));
}else return _0x39c1f0[
  _0x29928b(0x3b5,
            '*55g')](0x1);
}catch(_0x3c9aaa){
}finally{
  return Promise[
  'resolve'](0x1);
}
}
}!(async()=>{
  const _0x27735f=_0x36d9c7,
        _0x145b46={
          'SERCz':'undefined',
          'ysihd':function(_0xa82a0f){
            return _0xa82a0f();
          },
          'sOaGl':function(_0x59baed){
            return _0x59baed();
          },
          'fNJxN':function(_0x310af3,
                            _0x4e166c){
            return _0x310af3>_0x4e166c;
          },
          'QgZex':function(_0x183397,
                            _0x29b51f){
            return _0x183397!==_0x29b51f;
          },
          'QJMBQ':_0x27735f(0x459,
                            'mxlb'),
          'UhgUP':_0x27735f(0x365,
                            'eqF0'),
          'JAxpy':function(_0x570924,
                            _0x4d449b){
            return _0x570924>_0x4d449b;
          },
          'GpQjC':_0x27735f(0x353,
                            'tDY#'),
          'QrpOF':_0x27735f(0x2bc,
                            '5O^f'),
          'iKdzV':'5|7|3|9|8|2|4|6|1|10|11|12|0'
        };if(typeof $request!==_0x145b46[
          'SERCz']){
        }else{
          if(!await _0x145b46[
            _0x27735f(0x441,
                      'EYoW')](checkEnv))return;await _0x145b46[
            _0x27735f(0x1d5,
                      'wSI!')](sc);let _0x5df663=[
          ],
              _0x9d7ead=userList[
                _0x27735f(0x1fa,
                          'nLK)')](_0x4d4323=>_0x4d4323[
                  _0x27735f(0x2a0,
                            '[X2K')]);if(_0x145b46[
                  'fNJxN'](_0x9d7ead[
                  _0x27735f(0x41e,
                            'eqF0')],
                           0x0)){
                  if(_0x145b46[
                    _0x27735f(0x2ae,
                              'Rxxg')](_0x145b46[
                    _0x27735f(0x26e,
                              'hO@a')],
                                       _0x145b46[
                    _0x27735f(0x33d,
                              'sX9s')]))return _0x9cdd16[
                    'resolve'](0x1);else{
                    $[
                      'logAndNotify'](_0x145b46[
                      _0x27735f(0x379,
                                '4*@I')]),
                      _0x5df663=[
                    ];for(let _0x51db2e of _0x9d7ead){
                      _0x5df663[
                        _0x27735f(0x1cf,
                                  '*55g')](_0x51db2e[
                        'my']());
                    }await Promise[
                      _0x27735f(0x415,
                                '5O^f')](_0x5df663),
                      _0x9d7ead=_0x9d7ead[
                      _0x27735f(0x3d4,
                                'Rxxg')](_0x5d5c28=>_0x5d5c28[
                      _0x27735f(0x2b8,
                                '5O^f')]);if(_0x145b46[
                      _0x27735f(0x390,
                                'zpi%')](_0x9d7ead[
                      'length'],
                                         0x0)){
                      $[
                        _0x27735f(0x2b7,
                                  'nL*N')]('\x0a--------------\x20每日任务\x20--------------'),
                        _0x5df663=[
                      ];for(let _0x46f111 of _0x9d7ead[
                        _0x27735f(0x325,
                                  'sNgt')](_0x1e6b49=>_0x1e6b49[
                        _0x27735f(0x3b1,
                                  ']d[s')])){
                        _0x5df663[
                          _0x27735f(0x280,
                                    'cnX7')](_0x46f111[
                          _0x27735f(0x469,
                                    'nLK)')]()),
                          await $[
                          _0x27735f(0x4b8,
                                    'pmoL')](0xbb8);
                      }await Promise[
                        _0x27735f(0x493,
                                  '[X2K')](_0x5df663),
                        $[
                        _0x27735f(0x29c,
                                  'Rxxg')](_0x145b46[
                        _0x27735f(0x474,
                                  'TM&Q')]),
                        _0x5df663=[
                      ];for(let _0x5f06ef of _0x9d7ead[
                        _0x27735f(0x392,
                                  'JCPi')](_0x3a2230=>_0x3a2230[
                        _0x27735f(0x31a,
                                  ')&(D')])){
                        const _0x32296c=_0x27735f(0x236,
                                                  ']OFT')[
                          'split']('|');let _0x1a0268=0x0;while(!![
                          ]){
                            switch(_0x32296c[
                              _0x1a0268++]){
                              case'0':_0x5df663[
                                _0x27735f(0x490,
                                          'sX9s')](_0x5f06ef[
                                'help']());continue;case'1':_0x5df663[
                                _0x27735f(0x4b6,
                                          'RB@A')](_0x5f06ef[
                                'listteamTreeId']());continue;case'2':await $[
                                _0x27735f(0x303,
                                          '7UAM')](0x1388);continue;case'3':_0x5df663[
                                _0x27735f(0x3f4,
                                          '&iW^')](_0x5f06ef[
                                _0x27735f(0x418,
                                          'GZEK')]());continue;case'4':await $[
                                _0x27735f(0x48e,
                                          'sX9s')](0x1388);continue;
                            }break;
                          }
                      }await Promise[
                        _0x27735f(0x499,
                                  'cnX7')](_0x5df663),
                        $[
                        _0x27735f(0x3f2,
                                  ']OFT')](_0x145b46[
                        _0x27735f(0x403,
                                  '6G8V')]),
                        _0x5df663=[
                      ];for(let _0x5ef806 of _0x9d7ead[
                        'filter'](_0x37073d=>_0x37073d[
                        _0x27735f(0x4bf,
                                  '7*cm')])){
                        const _0x37c02a=_0x145b46[
                          _0x27735f(0x4d0,
                                    '4*@I')][
                            'split']('|');let _0x5228c9=0x0;while(!![
                            ]){
                              switch(_0x37c02a[
                                _0x5228c9++]){
                                case'0':_0x5df663[
                                  _0x27735f(0x45d,
                                            '5O^f')](_0x5ef806[
                                  _0x27735f(0x1df,
                                            'TM&Q')]());continue;case'1':_0x5df663[
                                  'push'](_0x5ef806[
                                  _0x27735f(0x1fd,
                                            'Rxxg')]());continue;case'2':await $[
                                  _0x27735f(0x316,
                                            'mxlb')](0x1388);continue;case'3':_0x5df663[
                                  _0x27735f(0x482,
                                            'Dz84')](_0x5ef806[
                                  _0x27735f(0x1de,
                                            '6G8V')]());continue;case'4':_0x5df663[
                                  _0x27735f(0x33f,
                                            'd3M5')](_0x5ef806[
                                  _0x27735f(0x245,
                                            'RB@A')]());continue;case'5':_0x5df663[
                                  'push'](_0x5ef806[
                                  'air_drop_receive']());continue;case'6':await $[
                                  _0x27735f(0x42c,
                                            'Rxxg')](0x1388);continue;case'7':await $[
                                  _0x27735f(0x1ea,
                                            '8dBD')](0x1388);continue;case'8':_0x5df663[
                                  'push'](_0x5ef806[
                                  _0x27735f(0x3d2,
                                            'pmoL')]());continue;case'9':await $[
                                  _0x27735f(0x33e,
                                            '(cxz')](0x1388);continue;case'10':await $[
                                  _0x27735f(0x427,
                                            'oww*')](0x1388);continue;case'11':_0x5df663[
                                  _0x27735f(0x2d9,
                                            ')&(D')](_0x5ef806[
                                  'list7']());continue;case'12':await $[
                                  _0x27735f(0x1ea,
                                            '8dBD')](0x1388);continue;
                              }break;
                            }
                      }await Promise[
                        _0x27735f(0x217,
                                  'nL*N')](_0x5df663);
                    }
                  }
                }await $[
                  _0x27735f(0x278,
                            'EYoW')]();
        }
})()[
  'catch'](_0x3f8ae1=>console[
    _0x36d9c7(0x1ec,
              ']OFT')](_0x3f8ae1))[
    _0x36d9c7(0x1ff,
              ')&(D')](()=>$[
      _0x36d9c7(0x347,
                '7UAM')]());async function sc(){
      const _0x355382=_0x36d9c7,
            _0x5a9494={
              'rAqUn':function(_0x3f9ec4,
                                _0x308f0a){
                return _0x3f9ec4===_0x308f0a;
              },
              'QQMJm':'kDCBw',
              'MFKpM':function(_0x4828aa,
                                _0x422528,
                                _0x2261bb){
                return _0x4828aa(_0x422528,
                                 _0x2261bb);
              },
              'daKJb':'XKyGy'
            };try{
              if(_0x5a9494[
                'rAqUn'](_0x5a9494[
                'QQMJm'],
                         _0x5a9494[
                _0x355382(0x34a,
                          '&7fM')])){
                let _0x188469=_0x355382(0x419,
                                        '5O^f'),
                    _0x5c2ddb='',
                    _0x3f3f9c=_0x5a9494[
                      'MFKpM'](populateUrlObject,
                               _0x188469,
                               _0x5c2ddb);await _0x5a9494[
                        _0x355382(0x28d,
                                  '@pLJ')](httpRequest,
                                           _0x355382(0x1ef,
                                                     'zpi%'),
                                           _0x3f3f9c);let _0x32a866=httpResult;if(!_0x32a866)return;$[
                        _0x355382(0x3f2,
                                  ']OFT')]('\x0a'+_0x32a866[
                        'content']+_0x355382(0x364,
                                             '(cxz')+_0x32a866[
                        _0x355382(0x3eb,
                                  'wSI!')]+'》'+_0x32a866[
                        _0x355382(0x2a8,
                                  '*55g')]);var _0x26320b=_0x32a866[
                        _0x355382(0x1e9,
                                  '7OnU')];
              }else return _0x47ec3a[
                _0x355382(0x2e9,
                          'RB@A')](0x1);
            }catch(_0x520b5b){
            }finally{
              return _0x5a9494[
                _0x355382(0x4cd,
                          'hO@a')]!==_0x5a9494[
                _0x355382(0x3f9,
                          ']OFT')]?_0x4ba40b[
                _0x355382(0x22a,
                          '7*cm')](0x1):Promise[
                _0x355382(0x32f,
                          '6G8V')](0x1);
            }
    }function _0x4634(_0x33437f,
                       _0x4d612c){
      const _0x48153e=_0x4815();return _0x4634=function(_0x463467,
                                                         _0x23df03){
        _0x463467=_0x463467-0x1cc;let _0x5454b0=_0x48153e[
          _0x463467];if(_0x4634[
            'UnErJj']===undefined){
            var _0x16e1cb=function(_0x59bf6d){
              const _0x47f149='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5bbd7e='',
                  _0x46960e='';for(let _0xcbc0f1=0x0,
                                   _0x505086,
                                   _0x5bb329,
                                   _0x33eaa2=0x0;_0x5bb329=_0x59bf6d[
                    'charAt'](_0x33eaa2++);~_0x5bb329&&(_0x505086=_0xcbc0f1%0x4?_0x505086*0x40+_0x5bb329:_0x5bb329,
                                                        _0xcbc0f1++%0x4)?_0x5bbd7e+=String[
                    'fromCharCode'](0xff&_0x505086>>(-0x2*_0xcbc0f1&0x6)):0x0){
                    _0x5bb329=_0x47f149[
                      'indexOf'](_0x5bb329);
                  }for(let _0x16d205=0x0,
                       _0xf76b0f=_0x5bbd7e[
                    'length'];_0x16d205<_0xf76b0f;_0x16d205++){
                    _0x46960e+='%'+('00'+_0x5bbd7e[
                      'charCodeAt'](_0x16d205)[
                      'toString'](0x10))[
                      'slice'](-0x2);
                  }return decodeURIComponent(_0x46960e);
            };const _0x3c8443=function(_0x23d239,
                                        _0x54b037){
              let _0x274c5d=[
              ],
                  _0xb51cf1=0x0,
                  _0x5b37c9,
                  _0x4c2f91='';_0x23d239=_0x16e1cb(_0x23d239);let _0xa36d29;for(_0xa36d29=0x0;_0xa36d29<0x100;_0xa36d29++){
                    _0x274c5d[
                      _0xa36d29]=_0xa36d29;
                  }for(_0xa36d29=0x0;_0xa36d29<0x100;_0xa36d29++){
                    _0xb51cf1=(_0xb51cf1+_0x274c5d[
                      _0xa36d29]+_0x54b037[
                      'charCodeAt'](_0xa36d29%_0x54b037[
                      'length']))%0x100,
                      _0x5b37c9=_0x274c5d[
                      _0xa36d29],
                      _0x274c5d[
                      _0xa36d29]=_0x274c5d[
                      _0xb51cf1],
                      _0x274c5d[
                      _0xb51cf1]=_0x5b37c9;
                  }_0xa36d29=0x0,
                    _0xb51cf1=0x0;for(let _0x2322e4=0x0;_0x2322e4<_0x23d239[
                      'length'];_0x2322e4++){
                      _0xa36d29=(_0xa36d29+0x1)%0x100,
                        _0xb51cf1=(_0xb51cf1+_0x274c5d[
                        _0xa36d29])%0x100,
                        _0x5b37c9=_0x274c5d[
                        _0xa36d29],
                        _0x274c5d[
                        _0xa36d29]=_0x274c5d[
                        _0xb51cf1],
                        _0x274c5d[
                        _0xb51cf1]=_0x5b37c9,
                        _0x4c2f91+=String[
                        'fromCharCode'](_0x23d239[
                        'charCodeAt'](_0x2322e4)^_0x274c5d[
                        (_0x274c5d[
                          _0xa36d29]+_0x274c5d[
                          _0xb51cf1])%0x100]);
                    }return _0x4c2f91;
            };_0x4634[
              'FIgxPX']=_0x3c8443,
              _0x33437f=arguments,
              _0x4634[
              'UnErJj']=!![
            ];
          }const _0x55c278=_0x48153e[
            0x0],
                _0x1db9ba=_0x463467+_0x55c278,
                _0x2ca892=_0x33437f[
                  _0x1db9ba];return!_0x2ca892?(_0x4634[
                    'xmwSPI']===undefined&&(_0x4634[
                    'xmwSPI']=!![
                  ]),
                                               _0x5454b0=_0x4634[
                    'FIgxPX'](_0x5454b0,
                              _0x23df03),
                                               _0x33437f[
                    _0x1db9ba]=_0x5454b0):_0x5454b0=_0x2ca892,
                    _0x5454b0;
      },
        _0x4634(_0x33437f,
                _0x4d612c);
    }async function checkEnv(){
      const _0x172849=_0x36d9c7,
            _0x3b4f65={
              'UBicl':function(_0x5682b3,
                                _0x2469a7){
                return _0x5682b3!==_0x2469a7;
              },
              'eRSsB':_0x172849(0x229,
                                'yzZa'),
              'YShtY':_0x172849(0x32b,
                                '7OnU'),
              'fjgXJ':_0x172849(0x4b9,
                                '7OnU'),
              'EUjVd':'\x0a❌未找到CK\x20请阅读脚本说明'
            };if(userCookie){
              if(_0x3b4f65[
                'UBicl'](_0x172849(0x2cd,
                                   '#1bR'),
                         _0x3b4f65[
                _0x172849(0x40e,
                          ')&(D')])){
                this[
                  _0x172849(0x296,
                            '4*@I')]=++_0x46960e,
                  this[
                  _0x172849(0x3e0,
                            '#hdj')]=this[
                  _0x172849(0x273,
                            '4lbg')],
                  this[
                  'valid']=![
                ],
                  this[
                  _0x172849(0x1f4,
                            '4*@I')]=![
                ];try{
                  this[
                    _0x172849(0x281,
                              'cnX7')]=_0x33eaa2[
                    _0x172849(0x328,
                              '7UAM')](_0x16d205),
                    this[
                    _0x172849(0x342,
                              'Dz84')]=!![
                  ];
                }catch(_0x65bb06){
                  this[
                    'ckValid']=![
                  ],
                    _0x23d239[
                    _0x172849(0x348,
                              '8dBD')](_0x172849(0x49f,
                                                 'yzZa')+this[
                    'index']+_0x172849(0x3ab,
                                       'd*)P'));
                }
              }else{
                let _0x4d94aa=envSplitor[
                  0x0];for(let _0x294001 of envSplitor){
                    if(userCookie[
                      'indexOf'](_0x294001)>-0x1){
                      _0x4d94aa=_0x294001;break;
                    }
                  }for(let _0x1b80e1 of userCookie[
                    'split'](_0x4d94aa)){
                    if(_0x1b80e1)userList[
                      'push'](new UserInfo(_0x1b80e1));
                  }userCount=userList[
                    'length'];
              }
            }else{
              if(_0x3b4f65[
                _0x172849(0x31c,
                          '7OnU')](_0x3b4f65[
                'YShtY'],
                                   _0x3b4f65[
                'fjgXJ'])){
                console[
                  _0x172849(0x444,
                            '6G8V')](_0x3b4f65[
                  _0x172849(0x35a,
                            'Dz84')]);return;
              }else return _0x4bc581[
                'resolve'](0x1);
            }return console[
              _0x172849(0x444,
                        '6G8V')](_0x172849(0x1f3,
                                           'pmoL')+userCount+_0x172849(0x341,
                                                                       '7OnU')),
              !![
            ];
    }function populateUrlObject(_0x5f974a,
                                 _0x3a429e,
                                 _0x3445fb=''){
      const _0x4cd090=_0x36d9c7,
            _0x8af66e={
              'BtdAB':'application/json;charset=UTF-8',
              'mpmfJ':_0x4cd090(0x2c3,
                                '&iW^')
            };let _0x2e3995=_0x5f974a[
              _0x4cd090(0x3a9,
                        '[X2K')]('//',
                                 '/')[
                _0x4cd090(0x319,
                          ']d[s')]('/')[
                  0x1],
                _0x1fd443={
                  'url':_0x5f974a,
                  'headers':{
                    'Host':_0x2e3995,
                    'x-auth-token':_0x3a429e,
                    'deviceTrait':deviceTrait,
                    'deviceId':deviceId,
                    'uuid':deviceId,
                    'appVersion':appVersion,
                    'User-Agent':defaultUA
                  },
                  'timeout':0x1388
                };return _0x3445fb&&(_0x1fd443[
                  'body']=_0x3445fb,
                                     _0x1fd443[
                  _0x4cd090(0x4af,
                            'gT$0')][
                  'content-type']=_0x8af66e[
                  'BtdAB'],
                                     _0x1fd443[
                  _0x4cd090(0x421,
                            '^UgA')][
                  _0x8af66e[
                    'mpmfJ']]=_0x1fd443[
                  _0x4cd090(0x235,
                            '7OnU')]?_0x1fd443[
                  'body'][
                  'length']:0x0),
                  _0x1fd443;
    }async function httpRequest(_0x2a43b1,
                                 _0x1981c3){
      const _0x35e835=_0x36d9c7,
            _0x14b771={
              'NvJtM':_0x35e835(0x44a,
                                'JCPi'),
              'KQTCQ':_0x35e835(0x3d0,
                                'tDY#'),
              'CyyQC':function(_0x340ebb,
                                _0x5bbe8f){
                return _0x340ebb===_0x5bbe8f;
              },
              'RWiiy':_0x35e835(0x274,
                                'Dz84'),
              'xfrLn':'rDVDS',
              'kMakN':function(_0x5a423b,
                                _0x4c7f0f){
                return _0x5a423b!==_0x4c7f0f;
              },
              'XQknO':_0x35e835(0x44d,
                                '*DQc'),
              'PYLdi':'object',
              'bSCHc':_0x35e835(0x313,
                                '7*cm'),
              'zjule':'GxuAJ',
              'oJROs':function(_0x3751f5,
                                _0x41ffd5){
                return _0x3751f5===_0x41ffd5;
              },
              'GafxA':_0x35e835(0x2e2,
                                'wSI!'),
              'tPMOK':function(_0x1b5cf7){
                return _0x1b5cf7();
              }
            };return httpResult=null,
              httpReq=null,
              httpResp=null,
              new Promise(_0x16731d=>{
              const _0x2a3bec=_0x35e835;if(_0x2a3bec(0x2a1,
                                                     '#hdj')!==_0x2a3bec(0x2dd,
                                                                         '7OnU'))$[
                _0x2a3bec(0x2f9,
                          'yzZa')](_0x2a43b1,
                                   _0x1981c3,
                                   async(_0x2c6b7b,
                                         _0x2c3db5,
                                         _0x41acaf)=>{
                const _0x435d40=_0x2a3bec,
                      _0x41330b={
                        'SlRUS':_0x14b771[
                          _0x435d40(0x340,
                                    '*55g')],
                        'oNPgN':_0x14b771[
                          'KQTCQ'],
                        'CpRxr':_0x435d40(0x478,
                                          'tDY#')
                      };try{
                        httpReq=_0x2c3db5,
                          httpResp=_0x41acaf;if(_0x2c6b7b)console[
                            'log'](_0x2a43b1+'请求失败'),
                            console[
                            _0x435d40(0x2b2,
                                      ')&(D')](JSON[
                            'stringify'](_0x2c6b7b));else{
                            if(_0x14b771[
                              'CyyQC'](_0x14b771[
                              _0x435d40(0x41f,
                                        '&7fM')],
                                       _0x14b771[
                              'xfrLn']))return _0x1d8ae7[
                              _0x435d40(0x21e,
                                        '7OnU')](0x1);else{
                              if(_0x41acaf[
                                _0x435d40(0x2e1,
                                          '^UgA')]){
                                if(_0x14b771[
                                  'kMakN'](_0x14b771[
                                  'XQknO'],
                                           _0x14b771[
                                  _0x435d40(0x409,
                                            'Dz84')]))_0x419639[
                                  _0x435d40(0x49b,
                                            'nLK)')](_0x1cc431);else{
                                  if(typeof _0x41acaf[
                                    _0x435d40(0x40b,
                                              'RB@A')]==_0x14b771[
                                    _0x435d40(0x449,
                                              'Rxxg')])httpResult=_0x41acaf[
                                    _0x435d40(0x4cf,
                                              'sNgt')];else{
                                      if(_0x14b771[
                                        'kMakN'](_0x14b771[
                                        'bSCHc'],
                                                 _0x14b771[
                                        _0x435d40(0x4b0,
                                                  '533@')]))try{
                                        _0x14b771[
                                          'oJROs'](_0x14b771[
                                          'GafxA'],
                                                   _0x14b771[
                                          _0x435d40(0x1ee,
                                                    '4lbg')])?httpResult=JSON[
                                          _0x435d40(0x366,
                                                    'pmoL')](_0x41acaf[
                                          'body']):_0x493a65=_0x3e5879[
                                          _0x435d40(0x258,
                                                    'tDY#')];
                                      }catch(_0x3dd494){
                                        httpResult=_0x41acaf[
                                          _0x435d40(0x23f,
                                                    'hO@a')];
                                      }else{
                                        let _0x485c81=_0x39f0dc[
                                          _0x435d40(0x462,
                                                    'wSI!')]('//',
                                                             '/')[
                                            _0x435d40(0x484,
                                                      ']OFT')]('/')[
                                              0x1],
                                            _0x28cb55={
                                              'url':_0x2ce02e,
                                              'headers':{
                                                'Host':_0x485c81,
                                                'x-auth-token':_0xdaa1da,
                                                'deviceTrait':_0x5d993c,
                                                'deviceId':_0x4b2e4a,
                                                'uuid':_0x5afa9c,
                                                'appVersion':_0x553724,
                                                'User-Agent':_0x5f370e
                                              },
                                              'timeout':0x1388
                                            };return _0x43bce6&&(_0x28cb55[
                                              _0x435d40(0x212,
                                                        '#hdj')]=_0x79f9ba,
                                                                 _0x28cb55[
                                              _0x435d40(0x20f,
                                                        '*DQc')][
                                              _0x41330b[
                                                'SlRUS']]=_0x41330b[
                                              _0x435d40(0x2af,
                                                        '%DFM')],
                                                                 _0x28cb55[
                                              _0x435d40(0x3b8,
                                                        'yzZa')][
                                              _0x41330b[
                                                _0x435d40(0x259,
                                                          'nLK)')]]=_0x28cb55[
                                              _0x435d40(0x315,
                                                        ']OFT')]?_0x28cb55[
                                              'body'][
                                              _0x435d40(0x2c1,
                                                        ')&(D')]:0x0),
                                              _0x28cb55;
                                      }
                                    }
                                }
                              }
                            }
                          }
                      }catch(_0x14f717){
                        console[
                          _0x435d40(0x205,
                                    'zpi%')](_0x14f717);
                      }finally{
                        _0x14b771[
                          'tPMOK'](_0x16731d);
                      }
              });else return _0x35b527[
                _0x2a3bec(0x48a,
                          'd3M5')](0x1);
            });
    }var version_ = 'jsjiami.com.v7';
////////////////////////////////////////////////////////////////////
function Env(name,
              env) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(name,
                 env) {
      this.name = name
      this.notifyStr = ''
      this.startTime = (new Date).getTime()
      Object.assign(this,
                    env)
      console.log(`${this.name
                  } 开始运行：`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const[
          ,
          s,
          i] = /^@(.*?)\.(.*?)$/.exec(t),
              r = s ? this.getval(s) : "";
        if (r)
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t,
                                    i,
                                    "") : e
          } catch (t) {
            e = ""
          }
      }
      return e
    }
    setdata(t,
             e) {
      let s = !1;
      if (/^@/.test(e)) {
        const[
          ,
          i,
          r] = /^@(.*?)\.(.*?)$/.exec(e),
              o = this.getval(i),
              h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e,
                          r,
                          t),
            s = this.setval(JSON.stringify(e),
                            i)
        } catch (e) {
          const o = {
          };
          this.lodash_set(o,
                          r,
                          t),
            s = this.setval(JSON.stringify(o),
                            i)
        }
      }
      else {
        s = this.setval(t,
                        e);
      }
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(),
                                                                                                                                    this.data[
        t]) : this.data && this.data[
        t] || null
    }
    setval(t,
            e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t,
                                                                      e) : this.isQuanX() ? $prefs.setValueForKey(t,
                                                                                                                  e) : this.isNode() ? (this.data = this.loaddata(),
                                                                                                                                        this.data[
        e] = t,
                                                                                                                                        this.writedata(),
                                                                                                                                        !0) : this.data && this.data[
        e] || null
    }
    send(m,
          t,
          e = (() => {
    })) {
      if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
        console.log(`无效的http方法：${m
                    }`);
        return;
      }
      if(m == 'get' && t.headers) {
        delete t.headers[
          "content-type"];
        delete t.headers[
          "Content-Length"];
      } else if(t.body && t.headers) {
        if(!t.headers[
          "content-type"]) t.headers[
          "content-type"] = "application/json";
      }
      if(this.isSurge() || this.isLoon()) {
        if(this.isSurge() && this.isNeedRewrite) {
          t.headers = t.headers || {
          };
          Object.assign(t.headers,
                        {
            "X-Surge-Skip-Scripting": !1
          });
        }
        let conf = {
          method: m,
          url: t.url,
          headers: t.headers,
          timeout: t.timeout,
          data: t.body
        };
        if(m == 'get') delete conf.data
        $axios(conf).then(t => {
          const {
            status: i,
            request: q,
            headers: r,
            data: o
          } = t;
          e(null,
            q,
            {
            statusCode: i,
            headers: r,
            body: o
          });
        }).catch(err => console.log(err))
      } else if (this.isQuanX()) {
        t.method = m.toUpperCase(),
          this.isNeedRewrite && (t.opts = t.opts || {
        },
                                 Object.assign(t.opts,
                                               {
          hints: !1
        })),
          $task.fetch(t).then(t => {
          const {
            statusCode: i,
            request: q,
            headers: r,
            body: o
          } = t;
          e(null,
            q,
            {
            statusCode: i,
            headers: r,
            body: o
          })
        },
                              t => e(t))
      } else if (this.isNode()) {
        this.got = this.got ? this.got : require("got");
        const {
          url: s,
          ...i
        } = t;
        this.instance = this.got.extend({
          followRedirect: false
        });
        this.instance[
          m](s,
             i).then(t => {
          const {
            statusCode: i,
            request: q,
            headers: r,
            body: o
          } = t;
          e(null,
            q,
            {
            statusCode: i,
            headers: r,
            body: o
          })
        },
                     t => {
          const {
            message: s,
            response: i
          } = t;
          e(s,
            i,
            i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "h+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1,
                                       ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e)
        new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1,
                                                            1 == RegExp.$1.length ? e[
          s] : ("00" + e[
          s]).substr(("" + e[
          s]).length)));
      return t
    }
    async showmsg() {
      if(!this.notifyStr) return;
      let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
      if($.isNode()){
        var notify = require('./sendNotify');
        console.log('\n============== 推送 ==============')
        await notify.sendNotify(this.name,
                                notifyBody);
      } else {
        this.msg(notifyBody);
      }
    }
    logAndNotify(str) {
      console.log(str)
      this.notifyStr += str
      this.notifyStr += '\n'
    }
    msg(e = t,
         s = "",
         i = "",
         r) {
      const o = t => {
        if (!t)
          return t;
        if ("string" == typeof t)
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          }
          : this.isSurge() ? {
            url: t
          }
          : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t[
              "open-url"],
                s = t.mediaUrl || t[
                  "media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t[
              "open-url"] || t.url || t.openUrl,
                s = t[
                  "media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t[
              "open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e,
                                                                           s,
                                                                           i,
                                                                           o(r)) : this.isQuanX() && $notify(e,
                                                                                                             s,
                                                                                                             i,
                                                                                                             o(r)));
      let h = [
        "",
        "============== 系统通知 =============="];
      h.push(e),
        s && h.push(s),
        i && h.push(i),
        console.log(h.join("\n"))
    }
    getMin(a,
            b){
      return ((a<b) ? a : b)
    }
    getMax(a,
            b){
      return ((a<b) ? b : a)
    }
    padStr(num,
            length,
            padding='0') {
      let numStr = String(num)
      let numPad = (length>numStr.length) ? (length-numStr.length) : 0
      let retStr = ''
      for(let i=0; i<numPad; i++) {
        retStr += padding
      }
      retStr += numStr
      return retStr;
    }
    json2str(obj,
              c,
              encodeUrl=false) {
      let ret = [
      ]
      for(let keys of Object.keys(obj).sort()) {
        let v = obj[
          keys]
        if(v && encodeUrl) v = encodeURIComponent(v)
        ret.push(keys+'='+v)
      }
      return ret.join(c);
    }
    str2json(str,
              decodeUrl=false) {
      let ret = {
      }
      for(let item of str.split('&')) {
        if(!item) continue;
        let idx = item.indexOf('=')
        if(idx == -1) continue;
        let k = item.substr(0,
                            idx)
        let v = item.substr(idx+1)
        if(decodeUrl) v = decodeURIComponent(v)
        ret[
          k] = v
      }
      return ret;
    }
    randomString(len,
                  charset='abcdef0123456789') {
      let str = '';
      for (let i = 0; i < len; i++) {
        str += charset.charAt(Math.floor(Math.random()*charset.length));
      }
      return str;
    }
    randomList(a) {
      let idx = Math.floor(Math.random()*a.length)
      return a[
        idx]
    }
    wait(t) {
      return new Promise(e => setTimeout(e,
                                         t))
    }
    done(t = {
    }) {
      const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
      console.log(`\n${this.name
                  } 运行结束，共运行了 ${s
                  } 秒！`)
      if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
    }
  }(name,
    env)
}
