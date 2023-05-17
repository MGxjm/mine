"""
cron: 58 23 * * *
new Env('抖极今日提现');
"""
import os
from datetime import datetime, timedelta
from notify import send

title="抖极今日提现"

def run():

    jt= datetime.today().strftime("%Y-%m-%d")
    zt=(datetime.today()-timedelta(days=1)).strftime("%Y-%m-%d")
    print(jt,zt)
    log_fo = f"{os.getcwd()}_jm_douyinjsb_tongzhi"
    os.chdir("../../log/")
    for i in os.listdir(os.getcwd()):
        print(i)
        if "douyinjsb_tongzhi" in i:
            log_fo = i
            os.chdir(f"{log_fo}")
    logs=sorted(os.listdir(os.getcwd()))
    for i in logs:
        if i.startswith(f'{zt}-23'):
            log_zt=os.path.abspath(i)
            break
    else:
        print("第一天运行")
        send(title,"今天还没有12点的日志！")
        exit()
    for j in logs[::-1]:
        if j.startswith(f'{jt}-23'):
            log_jt=os.path.abspath(j)
            break
    else:
        print("今天还没有12点的日志！")
        send(title,"今天还没有12点的日志！")
        exit()
    je_jt=read_log(log_jt)
    je_zt=read_log(log_zt)
    if len(je_zt)<=len(je_jt):
        i=0
        msg=''
        while i< len(je_zt):
            if je_jt[i]>15 or je_jt[i]<je_zt[i]:
                msg+=f"恭喜@{qq(i)}可以提现了!\n"
            i+=1
        if not msg :
            print("今天还没有人够提现，明天再看看。")
            send(title,"今天还没有人够提现，明天再看看。")
        else:
            send(title,msg)
    else:print("有账号登录失效！请检查！")
    send(title,"有账号失效，请检查！")


def qq(i):
    dyjsb=os.environ['dyjsb']
    ulist=dyjsb.split("\n")
    # ulist = dyjsb["comment"].split(" ")
    return ulist[i - 1]


def read_log(filepath):
    """return yu e list"""
    je = []
    with open(filepath, "r") as f:
        lines = f.read().split("\n")
    for i in lines:
        if i and i.startswith("今日"):
            num = float((i.split(":")[2].replace("元","")))
            je.append(num)
    return je


if __name__ == '__main__':
    run()