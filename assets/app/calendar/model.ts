export class Goal {
    constructor(public goalName: string,
                public goalId?: string,
                public goalPriority?: gPriority,
                public goalHoursEstimation?: gHoursEstimation,
                public goalCompleted?: boolean,
                public goalDateAddedOrChanged?: any[]
    ){}
//add a require completed booleeen after goalname
}

export class gHoursEstimation {
    constructor(
        public manualHours?: number
    ){}
}

export class gPriority {
    constructor(
        public manual?: number
    ){}
}