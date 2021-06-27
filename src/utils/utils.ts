import { v4  } from 'uuid';


export function createUuid() {
    const id: string = v4();
    return id
}