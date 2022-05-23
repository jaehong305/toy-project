import { InputType, PickType } from '@nestjs/graphql';
import { CreateBoardInput } from './createBoard.Input';

@InputType()
export class UpdateBoardInput extends PickType(CreateBoardInput, ['title', 'content'], InputType) {}
