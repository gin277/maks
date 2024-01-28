import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    modelName: "smart-house",
    createdAt: false,
    updatedAt: false
})
export default class SmartHouse extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    id?: number;

    @Column({
        type: DataType.STRING(255),
        field: "img"
    })
    img?: string;

    @Column({
        type: DataType.STRING(),
        field: "title"
    })
    title?: string;

    @Column({
        type: DataType.STRING(255),
        field: "description"
    })
    description?: string;
}