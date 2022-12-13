import { RowDataPacket } from "mysql2"

export interface Publisher extends RowDataPacket {
    id_publish?: number;
    id_seller: number;
    url_publish: string;
    active_publish: string;
}