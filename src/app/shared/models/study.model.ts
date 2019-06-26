
export class Study {
  uid: number;
  level: LevelStudy;
  title: TitleStudy;
  certificate: boolean;
  date: Date;
  bilingue: boolean;
  institution: Institution;
}

export class CollegeStudy extends Study {
  name: string;
}

export class VocationalStudy extends Study {
  category: Category;
  grade: Grade;
  dual: boolean;
}


export class Institution {
  uid: number;
  name: string;
}
export class Category {
  uid: number;
  name: string;
}
export class Grade {
  uid: number;
  name: string;
}
export class TitleStudy {
  uid: number;
  name: string;
}

export class LevelStudy {
    // uid: number;
    // name: string;
    private uid: number;
    private name: string;

    get name() {
        return this.name;
    }

    set name(arg: string) {
        this.name = arg;
    }

    get uid() {
        return this.uid;
    }

    set uid(arg: number) {
        this.uid = arg;
    }
}



