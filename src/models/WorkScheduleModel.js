import mongoose from "mongoose"
const Schema = mongoose.Schema;

const WorkScheduleSchema = new Schema(
    {
        maNhanVien: {
            type: String,
            required: true
        },
        ngayLam: {
            type: Date
        },
        gioBatDau: {
            type: Date
        },
        gioKetThuc: {
            type: Date
        },
        loaiCaTruc: {
            type: String,
        }

    }, {
        timestamps: true,
        versionKey: false
    }
)

const WorkSchedule = mongoose.model("WorkSchedule", WorkScheduleSchema)

export default WorkSchedule;