// 定义任务接口
export interface Task {
  name: string;
  priority: number;
  execute: () => void;
}

// 任务调度器类
export class TaskScheduler {
  private tasks: Task[] = [];

  // 添加任务方法
  addTask(task: Task): void {
    this.tasks.push(task);
    this.tasks.sort((a, b) => b.priority - a.priority); // 按优先级排序
  }

  // 执行所有任务方法
  executeAll(): void {
    while (this.tasks.length > 0) {
      const task = this.tasks.shift();
      if (task) {
        console.log(`Executing task: ${task.name}`);
        task.execute();
      }
    }
  }
}
