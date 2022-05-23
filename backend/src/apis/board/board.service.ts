import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async findAll({ page }) {
    const [boards, count] = await this.boardRepository.findAndCount({
      take: 10,
      skip: 10 * (page - 1),
      order: { createdAt: 'DESC' },
    });
    return { boards, count };
  }

  async findOne({ id }) {
    return await this.boardRepository.findOne({ id });
  }

  async create({ createBoardInput }) {
    return await this.boardRepository.save({ ...createBoardInput });
  }

  async update({ id, updateBoardInput }) {
    const board = await this.findOne({ id });
    const newBoard = {
      ...board,
      ...updateBoardInput,
    };
    return await this.boardRepository.save({ ...newBoard });
  }

  async delete({ id }) {
    const result = await this.boardRepository.softDelete({ id });
    console.log(result);
    return result.affected ? true : false;
  }
}
