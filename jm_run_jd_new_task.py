"""
new Env('新任务立即执行一次');
cron: 0 30 9 * * *
"""
import os
import time


def run():
    os.chdir("/ql/data/log/6dylan6_jdpro/")
    log = sorted(os.listdir(os.getcwd()))[-1] # 获取最近一次的日志文件
    if not log:print("找不到日志文件！")
    path_log=os.path.abspath(log) # 转化成完整路径
    tasks=get_new_task(path_log)
    if not tasks:
        exit()
    for i in tasks:
        if os.path.basename(i).startswith('jd_dplh'):# 不运行大牌联合任务
            print(f"跳过大牌联合{i},请按手动执行")
            continue
        t=f"task {i} now"
        print(f"将会运行命令{t}") 
        os.system(t)
        print("等待300秒")
        time.sleep(300)

def get_new_task(file_path):
    with open(file_path, "r") as f:
        lines=f.read().replace("\n\n","\n").split("\n") # 去掉空行
        for i in lines:
            if i=="检测到有新的定时任务：":
                start=lines.index(i)+2
            elif i=="开始尝试自动添加定时任务...":
                stop=lines.index(i)-1
                break
        else:
            print("没有检测到新任务")
            return None
        task_s=lines[start:stop]
        _=[print(i) for i in task_s]
        return task_s
        



if __name__ == '__main__':
    run()