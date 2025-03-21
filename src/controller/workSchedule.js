import WorkSchedule from '../models/WorkScheduleModel.js';

class WorkScheduleController {
    async getAllWorkSchedules(req, res) {
        try {
            const workSchedules = await WorkSchedule.find();
            res.status(200).json({
                message: "GET ALL workSchedule DONE",
                data: workSchedules
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
    async getWorkScheduleDetails(req, res) {
        try {
            const workSchedule = await WorkSchedule.findById(req.params.id)
            
            if(!workSchedule) {
                return res.status(404).json({
                    message: 'workSchedule not found'
                })
            }
            res.status(200).json({
                message: "GET ALL workSchedule DONE",
                data: workSchedule
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

    async createWorkSchedule(req, res) {
        const newWorkSchedule = new WorkSchedule(req.body);
        const saveWorkSchedule = await newWorkSchedule.save()
        res.status(201).json({
            message: 'create workSchedule successfull',
            data: saveWorkSchedule
        })
    }

    async updateWorkSchedule(req, res) {
        try {
            const workSchedule = await WorkSchedule.findByIdAndUpdate(req.params.id, req.body);
            if(!workSchedule) {
                return res.status(404).json({
                    message: 'workSchedule not found'
                })
            }
            const updateWorkSchedule = await WorkSchedule.findById(req.params.id);
            res.status(200).json({
                message: "UPDATE workSchedule SUCCESFULL",
                data: updateWorkSchedule
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

    async deleteWorkSchedule(req, res) {
        try {
            const workSchedule = await WorkSchedule.findByIdAndDelete(req.params.id);
            if(!workSchedule) {
                return res.status(404).json({
                    message: 'workSchedule not found'
                })
            }
            res.status(200).json({
                message: "DELETE workSchedule DONE",
                data: workSchedule
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

}

export default WorkScheduleController