import mongoose from "mongoose"
const Schema = mongoose.Schema;

const TicketSchema = new Schema(
    {
        maSuatChieu: {
            type: String,
            required: true
        },
        maNhanVien: {
            type: String,
            required: true
        },
        gia: {
            type: Number
        },
        trangThai: {
            type: String
        },
        ngayBan: {
            type: Date
        },
        maGhe: {
            type: String
        }

    }, {
        timestamps: true,
        versionKey: false
    }
)

const Ticket = mongoose.model("Ticket", TicketSchema)

export default Ticket;