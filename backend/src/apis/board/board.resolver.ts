import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { CreateBoardInput } from './dto/createBoard.Input';
import { GetBoardsAndCount } from './dto/getBoardsAndCount';
import { UpdateBoardInput } from './dto/updateBoard.Input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => GetBoardsAndCount)
  async getBoards(@Args({ name: 'page', type: () => Int, defaultValue: 1 }) page: number) {
    return await this.boardService.findAll({ page });
  }

  @Query(() => Board)
  async getBoard(@Args('id') id: string) {
    return await this.boardService.findOne({ id });
  }

  @Mutation(() => Board)
  async createBoard(@Args('createBoardInput') createBoardInput: CreateBoardInput) {
    return await this.boardService.create({ createBoardInput });
  }

  @Mutation(() => String)
  async updateBoard(
    @Args('id') id: string,
    @Args('updateBoardInput') updateBoardInput: UpdateBoardInput,
  ) {
    return await this.boardService.update({ id, updateBoardInput });
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Args('id') id: string) {
    return await this.boardService.delete({ id });
  }
}
