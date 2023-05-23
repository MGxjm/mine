"""
new Env('新任务立即执行一次');
"""
import os
import time


def run():
    os.chdir("../../log/6dylan6_jdpro/")
    log = sorted(os.listdir(os.getcwd()))[0]
    if not log:print("找不到日志文件！")
    path_log=os.path.abspath(log)
    tasks=get_new_task(path_log)
    for i in tasks:
        t=eval(f"task {i}")
        print(f"直接运行命令{i}")
        os.system(eval(f"task {t}"))
        time.sleep(300)

def get_new_task(file_path):
    with open(file_path, "r") as f:
        lines=f.read().replace("\n\n","\n").split("\n")
        for i in lines:
            if i=="检测到有新的定时任务：":
                start=lines.index(i)+2
            elif i=="开始尝试自动添加定时任务...":
                stop=lines.index(i)-1
        task_s=lines[start:stop]
        return task_s



if __name__ == '__main__':
    run()