import { Like } from './Like.dto';
import { User } from './User.dto';

export interface Tweets {
    id: number;
    mensaje: string;
    likes: Like[];
    user: User;
}
