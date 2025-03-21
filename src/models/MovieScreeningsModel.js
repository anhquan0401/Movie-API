import mongoose from "mongoose"
const Schema = mongoose.Schema;

const MovieScreeningsSchema = new Schema(
    {
        maPhim: {
            type: String,
            required: true
        },
        maPhong: {
            type: String,
            required: true
        },
        gioBatDau: {
            type: Date
        },
        gioKetThuc: {
            type: Date
        },
        tranThai: {
            type: Boolean
        }

    }, {
        timestamps: true,
        versionKey: false
    }
)

const MovieScreening = mongoose.model("MovieScreening", MovieScreeningsSchema)

export default MovieScreening;