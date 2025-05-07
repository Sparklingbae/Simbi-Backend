import { Request, Response, NextFunction } from 'express';
import {CreateStudyPlanInput ,StudyPlan} from '../interfaces/study-plan.interfaces';
import studyPlan from '../config/openAi';


function isValidStudyPlan(plan: any): plan is StudyPlan{
    return (
        typeof plan.title === 'string' &&
        typeof plan.description === 'string' &&
        typeof plan.duration === 'string' &&
        Array.isArray(plan.topics) &&
        plan.topics.every((topic: any) => typeof topic === 'string')
    );
}

export async function createStudyPlan(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log('Request Body:', req.body);
        const plan = {
            title: req.body.title,
            description: req.body.description,
            duration: req.body.duration,
            topics: req.body.topics,
        };
        console.log('Plan:', plan);

        if (!isValidStudyPlan(plan)) {
            res.status(400).json({ error: 'Invalid study plan format' });
            return;
        }

        const prompt: string = `Create a study plan for the following topic: ${plan.title}. The description is: ${plan.description}. The duration is: ${plan.duration}. The topics are: ${plan.topics.join(', ')}.`;

        console.log('Prompt:', prompt);
        // const response = await getResponseWithHuggingFace(prompt);
        const response = await studyPlan(prompt);
        console.log('AI Response:', response);
        res.status(200).json({ response });
    } catch (error) {
        console.error('Error in createStudyPlan:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}