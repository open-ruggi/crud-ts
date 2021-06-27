import { Request } from "express";
import { OperationService } from "../service/operation.service";
import { Operation } from '../model/interface/operations.interface'

export class OperationController {

    
    async saveSum(req: Request, userId:number): Promise<any> {
        const {firstValue, secondValue} = req.body.suma
        const resultValue: number = firstValue + secondValue
        const operationService= new OperationService()
        const result = await operationService.save(firstValue,secondValue,resultValue,userId)
        console.log(result)
        return resultValue
    }

    async getRecords(userId:number): Promise<any> {
        const operationService= new OperationService()
        const result = await operationService.findAllByUserId(userId)
        console.log(result)
        return result
    }

}