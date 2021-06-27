
import { Operation,OperationResponse } from '../model/interface/operations.interface'
import { OperationRepository } from '../model/operation.repository'
export class OperationService {


    public async save(firstValue: number, secondValue: number, resultValue: number, user_id: number): Promise<any> {
        const operationRepository = new OperationRepository()
        const result = await operationRepository.create(firstValue, secondValue, resultValue, user_id)
        console.log(result)
        return {
            firstValue: firstValue,
            secondValue:secondValue,
            resultValue:resultValue,
            message: `the sum of the value ${firstValue} plus the value ${firstValue} is ${resultValue} `

        }
    };

    public async findAllByUserId(user_id: number): Promise<any> {
        const operationRepository = new OperationRepository()
        const result = await operationRepository.findAll(user_id)

        let  operations :OperationResponse[] = []
        result.rows.forEach((e,i) => {

            let operationResponseObj :OperationResponse= {
                firstValue :e.first_value,
                secondValue : e.second_value,
                resultValue : e.result_value,
                message : ` ${i }) the sum of the value ${e.first_value} plus the value ${e.second_value} is ${e.result_value} `,
                date : e.created_on
            }
            operations.push(operationResponseObj)
        });
        return { operations: operations }
    };


}