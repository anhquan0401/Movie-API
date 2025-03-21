import mongoose from "mongoose"
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
    {
        tenDangNhap: {
            type: String
        },
        matKhau: {
            type: String
        },
        email: {
            type: String
        },
        soDienThoai: {
            type: String
        },
        ngaySinh: {
            type: Date
        },
        diaChi: {
            type: String
        }

    }, {
        timestamps: true,
        versionKey: false
    }
)

const Employee = mongoose.model("Employee", EmployeeSchema)

export default Employee;