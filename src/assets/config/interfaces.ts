export interface User {
    id : number;
    email : string;
    level : string;
    state : string;
    date : number;
}

export interface State {
    user: User,
    loading: Boolean,
    profiles : []
}

export interface navbarState {
    userSideActive : Boolean
}


export interface administratorState {
    admins : any[] | []
}

export interface carState {
    cars : any[] | [],
    data : []
}


export interface userState {
    users : any[] | [],
}

export interface managementState {
    brands : any[] | [],
    models : any[] | [],
}

export interface cartypetState {
    cartypes : any[] | [],
}

export interface gearboxtState {
    gearboxs : any[] | [],
}

export interface caracteristictState {
    caracteristics : any[] | [],
}

export interface ownerState {
    owners : any[] | [],
}
