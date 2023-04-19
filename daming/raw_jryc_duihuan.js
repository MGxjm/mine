/**
 * 今日越城兑换
 * cron 10 7 * * *  jryc_exchange.js
 * jryc_exchange
 * ========= 青龙--配置文件 ===========
 * # 项目名称
 * export jryc_exchange_data='53334037288976731_922_xxxxxx&8888'
 * 
 * 多账号用 换行 或 @ 分割
 * 抓包 https://jfwechat.chengquan.cn/ , 找到 ugrdxsil 即可 按着下面的商品id去设置你想要兑换的商品
 * 每周五9点到12点去开启定时任务,定时3s一次即可？随意？
 * ====================================
 *精选好物
 *积分10000		名称:中石化100元加油卡		id:8930	
 *积分3000		名称:全国话费通兑30元		id:8947	
 *积分5000		名称:全国话费通兑50元		id:8928	
 *积分3000		名称:爱奇艺黄金会员月卡		id:8924	
 *积分3000		名称:优酷VIP会员月卡		id:8926	
 *积分3000		名称:腾讯视频VIP会员月卡		id:8927	
 *积分2000		名称:PC移动影视会员月卡		id:8864	
 *积分2000		名称:肯德基20元代金券链接		id:8875	
 *积分2000		名称:麦当劳20元代金券		id:8879	
 *积分3000		名称:奈雪の茶30元代金券		id:8873	
 *
 *音乐视频
 *积分2000		名称:PC移动影视会员月卡		id:8864	
 *积分5000		名称:bilibili会员月卡		id:8865	
 *积分1500		名称:QQ音乐绿钻豪华版月卡		id:8868	
 *积分2500		名称:蜻蜓FM超级会员月卡		id:8869	
 *积分2000		名称:喜马拉雅VIP月卡		id:8870	
 *积分1500		名称:懒人畅听VIP月卡		id:8871	
 *积分3000		名称:爱奇艺黄金会员月卡		id:8924	
 *积分1800		名称:网易云音乐黑胶VIP月卡		id:8925	
 *积分3000		名称:优酷VIP会员月卡		id:8926	
 *积分3000		名称:腾讯视频VIP会员月卡		id:8927	
 *
 *美食饮品
 *积分3300		名称:星巴克中杯通兑券		id:8872	
 *积分3000		名称:奈雪の茶30元代金券		id:8873	
 *积分5000		名称:奈雪の茶50元代金券		id:8874	
 *积分2000		名称:肯德基20元代金券链接		id:8875	
 *积分5000		名称:肯德基50元代金券链接		id:8876	
 *积分5000		名称:必胜客50元卡链通兑券		id:8877	
 *积分10000		名称:必胜客100元卡链代金券		id:8878	
 *积分2000		名称:麦当劳20元代金券		id:8879	
 *积分2000		名称:满记甜品20元代金券		id:8880	
 *积分2000		名称:良品铺子礼品卡20元		id:8882	
 *
 *出行券
 *积分1000		名称:滴滴快车10元代金券		id:8884	
 *积分1000		名称:滴滴代驾券10元		id:8886	
 *积分4000		名称:e代驾40元代金券		id:8887	

 *充值类
 *积分5000		名称:全国话费通兑50元		id:8928	
 *积分10000		名称:中石化100元加油卡		id:8930	
 *积分3000		名称:全国话费通兑30元		id:8947	

 *电影票
 *积分3000		名称:猫眼电影30元代金券		id:8897	

 *外卖
 *积分1000		名称:美团外卖券10元		id:8893	
 *积分2000		名称:美团外卖券20元		id:8894	
 *积分3000		名称:美团外卖30元代金券-直充		id:8895	
 *积分1500		名称:饿了么超级会员月卡-直充		id:8896	

 *生活服务
 *积分2500		名称:知乎盐选会员月卡		id:8892	
 *积分2000		名称:作业帮vip月卡		id:8902	
 *积分4800		名称:樊登读书会员月卡		id:8903	
 *积分3500		名称:百度文库会员季卡		id:8904	
 *积分2500		名称:Keep会员月卡		id:8905	
 *积分3000		名称:百度网盘超级会员月卡		id:8913	
 *积分4500		名称:凯叔讲故事月卡		id:8914
 */



const $ = new Env("今日越城兑换");
const ckName = "jryc_exchange_data";
//-------------------- 一般不动变量区域 -------------------------------------
//const utils = require("./utils");
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1;		 //0为关闭通知,1为打开通知,默认为1
let debug = 0;           //Debug调试   0关闭  1开启
let envSplitor = ["@", "\n"]; //多账号分隔符
let ck = msg = '';       //let ck,msg
let host, hostname;
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || '';
let userList = [];
let userIdx = 0;
let userCount = 0;
//---------------------- 自定义变量区域 -----------------------------------
//---------------------------------------------------------

async function start() {

    console.log('\n================== 开始兑换 ==================\n');
    taskall = [];
    for (let user of userList) {
        taskall.push(await user.user_info('开始兑换'));
        //await wait(1); //延迟
    }
    await Promise.all(taskall);



}


class UserInfo {
    constructor(str) {
        this.index = ++userIdx;
        this.ck = str.split('&')[0]; //单账号多变量分隔符
        this.goods = str.split('&')[1];
        //let ck = str.split('&')
        //this.data1 = ck[0]
        this.host = "echo.apipost.cn";
        this.hostname = "https://" + this.host;

    }

    async user_info(name) { // 用户信息
        try {
            let options = {
                method: 'POST',
                url: 'https://jfwechat.chengquan.cn/integralMallOrder/orderNow',
                headers: {
                    Host: 'jfwechat.chengquan.cn',
                    pragma: 'no-cache',
                    'cache-control': 'no-cache',
                    ugrdxsil: this.ck,
                    accept: 'application/json',
                    'x-requested-with': 'XMLHttpRequest',
                    'user-agent': 'Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36;xsb_yuecheng;xsb_yuecheng;1.1.9',
                    'content-type': 'application/x-www-form-urlencoded',
                    origin: 'https://jfwechat.chengquan.cn',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    referer: 'https://jfwechat.chengquan.cn/integralMall/productDetail?productId=8947',
                    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                },
                form: { productId: this.goods, exchangeNum: '1', rechargeNumber: '', exchangeAccount: '' }
            };

            //console.log(options);
            let result = await httpRequest(options, name);
            //console.log(result);
            if (result.errCode == 0 || result.errCode == 200) {
                DoubleLog(`账号[${this.index}]  用户兑换成功: ${result.errorMsg}`);
                console.log(result);
            } else if (result.errorCode == 7019) {
                DoubleLog(`账号[${this.index}]  用户兑换:失败 ? 了呢,原因未知！，可能是库存不足`);
                console.log(result);
            } else if (result.errorCode == 201) {
                DoubleLog(`账号[${this.index}]  用户兑换:失败 ? 了呢,原因未知！`);
                console.log(result);
            } else if (result.errorCode == 5010) {
                DoubleLog(`账号[${this.index}]  用户兑换:失败 ? 了呢,原因未知！`);
                console.log(result);
            }
        } catch (error) {
            console.log(error);
        }
    }




}

!(async () => {
    if (!(await checkEnv())) return;
    if (userList.length > 0) {
        await start();
    }
    await SendMsg(msg);
})()
    .catch((e) => console.log(e))
    .finally(() => $.done());


// #region ********************************************************  固定代码  ********************************************************

// 变量检查与处理
async function checkEnv() {
    if (userCookie) {
        // console.log(userCookie);
        let e = envSplitor[0];
        for (let o of envSplitor)
            if (userCookie.indexOf(o) > -1) {
                e = o;
                break;
            }
        for (let n of userCookie.split(e)) n && userList.push(new UserInfo(n));
        userCount = userList.length;
    } else {
        console.log("未找到CK");
        return;
    }
    return console.log(`共找到${userCount}个账号`), true;//true == !0
}
// =========================================== 不懂不要动 =========================================================
// 网络请求 (get, post等)
async function httpRequest(options, name) { var request = require("request"); return new Promise((resolve) => { if (!name) { let tmp = arguments.callee.toString(); let re = /function\s*(\w*)/i; let matches = re.exec(tmp); name = matches[1] } if (debug) { console.log(`\n【debug】===============这是${name}请求信息===============`); console.log(options) } request(options, function (error, response) { if (error) throw new Error(error); let data = response.body; try { if (debug) { console.log(`\n\n【debug】===============这是${name}返回数据==============`); console.log(data) } if (typeof data == "string") { if (isJsonString(data)) { let result = JSON.parse(data); if (debug) { console.log(`\n【debug】=============这是${name}json解析后数据============`); console.log(result) } resolve(result) } else { let result = data; resolve(result) } function isJsonString(str) { if (typeof str == "string") { try { if (typeof JSON.parse(str) == "object") { return true } } catch (e) { return false } } return false } } else { let result = data; resolve(result) } } catch (e) { console.log(error, response); console.log(`\n ${name}失败了!请稍后尝试!!`) } finally { resolve() } }) }) }
// 等待 X 秒
function wait(n) { return new Promise(function (resolve) { setTimeout(resolve, n * 1000) }) }
// 双平台log输出
function DoubleLog(data) { if ($.isNode()) { if (data) { console.log(`${data}`); msg += `${data}` } } else { console.log(`${data}`); msg += `${data}` } }
// 发送消息
async function SendMsg(message) { if (!message) return; if (Notify > 0) { if ($.isNode()) { var notify = require("./sendNotify"); await notify.sendNotify($.name, message) } else { $.msg($.name, '', message) } } else { console.log(message) } }
// 完整 Env
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `??${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============??系统通知??=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `??${this.name}, 错误!`, t.stack) : this.log("", `??${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `??${this.name}, 结束! ?? ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }