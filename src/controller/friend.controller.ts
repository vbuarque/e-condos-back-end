import { Request, Response } from 'express';
import Friend, { IFriend } from '../models/friend.model';

export default class AmigoController {
  public async index(req: Request, res: Response): Promise<void> {
    try {
      const friends: IFriend[] = await Friend.find();
      res.json(friends);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async show(req: Request, res: Response): Promise<void> {
    try {
      const friend: IFriend | null = await Friend.findById(req.params.id);
      if (friend) {
        res.json(friend);
      } else {
        res.status(404).send('Amigo não encontrado');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const friend: IFriend = new Friend(req.body);
      await friend.save();
      res.json(friend);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const friend: IFriend | null = await Friend.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
      if (friend) {
        res.json(friend);
      } else {
        res.status(404).send('Amigo não encontrado');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const friend: IFriend | null = await Friend.findByIdAndDelete(req.params.id);
      if (friend) {
        res.json(friend);
      } else {
        res.status(404).send('Amigo não encontrado');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
