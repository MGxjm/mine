/**
 * 抖音极速版，按理来说只需要传sessionid就行
 croN:0 0,30 5-23,0 * * *
 * 变量名 dyjsb
 * 值格式 export dyjsb='sessionid=xxx&device_id=xxx&iid=xxx'
 * sessionid必填，device_id和iid实在抓不到不填应该问题不大
 * 
 * 代码就不加密了
 * author：by 张铁蛋
 */
const $ = new Env('抖音极速版_整合版');

let tokens = $.getdata('dyjsb') || process.env['dyjsb'] || '';
!(async () => {
    if (tokens.indexOf("@") != -1) {
        tokens = tokens.split('@') || [];
    } else {
        tokens = tokens.split('\n') || [];
    }
    if (!tokens[0]) {
        $.log(`请设置环境变量添加抖音极速版账号`)
        return;
    }
    $.log(`共获取到${tokens.length}个账号`);
    let userList = [];
    tokens.forEach(token => {
        let user = jxUser(token);
        if (user.sessionid) {
            userList.push(new UserInfo(user.sessionid, user.device_id, user.iid));
        } else {
            console.log("账号格式错误");
        }
    })
    for (let i = 0; i < userList.length; i++) {
        let userInfo = userList[i];
        await userInfo.main(i);
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done());

function jxUser(val) {
    let res = {};
    let arrs = val.split("&");
    arrs.forEach(arr => {
        let kvs = arr.split("=");
        res[kvs[0]] = kvs[1];
    })
    return res;
}


function UserInfo(seesion = '', device_id = '', iid = '') {
    let isbreak = false;
    let cookie = 'sessionid=' + seesion;
    let $user_agent = '';
    let version_name = '23.7.0';
    let aid = 2329;
    let app_name = 'douyin_lite';
    let index = 0;
    let isOpenBox = false;
    let indexObj = {};

    function randomString(e) {
        e = e || 32;
        let t = "abcdefhijkmnprstwxyz123456789",
            a = t.length,
            n = "";
        for (i = 0; i < e; i++)
            n += t.charAt(Math.floor(Math.random() * a));
        return n
    }

    this.main = async function (i) {
        index = i + 1;
        if (!device_id) {
            device_id = randomString(16)
        }
        if (!iid) {
            iid = randomString(16)
        }
        await get_info();
        if (isbreak) {
            return;
        }
        await sign();
        await upload_step();
        await read();
        await one_more_detail();
        await excitation_ad();
        await shopping_gold();
        await excitation_ad_treasure_box();
        await ad_append('excitation_ad', '看广告追加');
        await ad_append('meal_excitation_ad', '吃饭补贴视频');
        await ad_append('walk_excitation_ad', '步行额外视频');
        await search_excitation();
    }

    function get_info() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/page?iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}`;
            const options = {
                url: url,
                headers: {
                    'Host': 'api5-normal-c-lf.amemv.com',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                }
            }
            $.get(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.data.is_login) {
                            $.log(`账号[${index}]今日金币收入:${data.data.income_data?.amount1} 余额:${data.data.income_data?.amount2 / 100}元`);
                            if (data.data.treasure_stats) {
                                let treasure_stats = data.data.treasure_stats;
                                if (treasure_stats.next_time < treasure_stats.cur_time) {
                                    $.log(`账号[${index}]准备开宝箱，这里要开几分钟`);
                                    //可以开宝箱
                                    let openCount = 0;
                                    while (!isOpenBox) {
                                        openCount++;
                                        await open_box();
                                        // if(openCount>100){
                                        //     isOpenBox=true;
                                        // }
                                        // await $.wait(1000);
                                    }
                                } else {
                                    $.log(`账号[${index}]下次开宝箱时间：${new Date(treasure_stats.next_time * 1000)}`);
                                }
                            }
                            isbreak = false;
                        } else {
                            $.log(`账号[${index}]登录失败！`);
                            isbreak = true;
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function sign() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/sign_in?iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}`;
            const options = {
                url: url,
                headers: {
                    'Host': 'api5-normal-c-lf.amemv.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                },
                body: '{}'
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        $.log(`账号[${index}]签到: ${data.err_tips}`);
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function open_box() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/treasure_task?_request_from=web&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'api5-normal-c-lf.amemv.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                },
                body: '{}'
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            isOpenBox = true;
                            $.log(`账号[${index}]${data.data.success_desc}: ${data.data.amount}金币`);
                            $.log(`账号[${index}]下次开宝箱时间为：${new Date(data.data.next_time * 1000)}`);
                            let excitation_ad_info = data.data.excitation_ad_info;
                            if (excitation_ad_info) {
                                excitation_ad_info.amount = data.data.amount;
                                excitation_ad_info.ad_alias_position = 'box';
                                $.log(`账号[${index}]开宝箱-看广告视频预计再赚${excitation_ad_info.score_amount}金币`);
                                await show_ad(excitation_ad_info);
                            }
                        } else {
                            //$.log(`账号[${index}]开宝箱: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function ad_append(task_key = 'excitation_ad', name = '', one_more_round = 0) {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?_request_from=web&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: '{"task_key":"' + task_key + '","rit":"28038","creator_id":"12315000","one_more_round":' + one_more_round + '}'
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]${name ? name : task_key}: 获得${data.data.amount}金币`);
                        } else {
                            $.log(`账号[${index}]${name ? name : task_key}: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function show_ad(ad_info) {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/${ad_info.task_key}?_request_from=web&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'api5-normal-c-lf.amemv.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                },
                body: `{"task_key":"${ad_info.task_key}","amount":"${ad_info.score_amount}","ad_rit":"${ad_info.ad_id}","ad_inspire":"{"score_amount":"${ad_info.score_amount}","amount":"${ad_info.amount}","req_id":"${ad_info.req_id}"}","ad_alias_position":"${ad_info.ad_alias_position}","timeout":4000}`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]${data.data.content}: ${data.data.amount}金币`);
                        } else {
                            $.log(`账号[${index}]看广告视频: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function upload_step() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-hl.amemv.com/luckycat/aweme/v1/task/walk/step_submit?iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `{"step":${parseInt((10000 + Math.random() * 10000) + "")},"submit_time":${new Date().getTime() / 1000}`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]上传步数奖励: 获得${data.data.amount}金币`);
                        } else {
                            $.log(`账号[${index}]上传步数奖励: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function excitation_ad() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/excitation_ad?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `{"from":"excitation_ad"}`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]看广告: 获得${data.data.amount}金币`);
                        } else {
                            $.log(`账号[${index}]看广告: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function shopping_gold() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/shopping_gold?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `body=11222`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]逛街: ${data.data.reward_text}`);
                        } else {
                            $.log(`账号[${index}]逛街: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function excitation_ad_treasure_box() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `body=11222`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]开宝箱视频: ${data.data.amount}金币`);
                        } else {
                            $.log(`账号[${index}]开宝箱视频: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function one_more_detail() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=excitation_ad_treasure_box&rit=28038&creator_id=12317000&one_more_round=0&mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
            }
            $.get(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            if (data.data.has_one_more) {
                                //$.log(`账号[${index}]宝箱连续视频下次奖励: ${data.data.amount}金币`);
                                await ad_append('excitation_ad_treasure_box', '宝箱连续视频');
                            }
                        } else {
                            $.log(`账号[${index}]宝箱连续视频下次奖励: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function read() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/read?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `{}`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]观看视频: ${data.data.score_amount}金币`);
                        } else {
                            $.log(`账号[${index}]观看视频: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function search_excitation() {
        return new Promise(resolve => {
            let url = `https://api5-normal-c-lq.amemv.com/luckycat/aweme/v1/task/done/search_excitation?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=14709901`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `{}`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]领取搜索奖励: ${data.data.score_amount}金币`);
                        } else {
                            $.log(`账号[${index}]领取搜索奖励: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }


}


function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
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

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}