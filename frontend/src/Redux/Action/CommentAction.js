import axios from "axios"
import { Authconfig } from "./StoryAction"
import { backend } from "../../Connection/conn"

export const deleteComment = (id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`${backend}/api/comment/delete/${id}`, Authconfig)
        return 'success'
    }
    catch (err) {
        return err;
    }
}