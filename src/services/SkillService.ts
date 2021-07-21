/* eslint-disable import/prefer-default-export */

import useStage from '@/composables/useStage';
import useStageSkill from '@/composables/useStageSkill';
import useSkill from '@/composables/useSkill';
import { dateDifferenceInMonth } from '@/utils/dateUtils';
import SkillDecorator from '@/decorators/SkillDecorator';
import { orderBy } from 'lodash';
import { Filter } from '@/types';

const { findStages } = useStage();
const { findStageSkill } = useStageSkill();
const { findSkill } = useSkill();

const buildSkillsWithUseInMonths = (
  stageIds: Array<number | string>,
  filters: Array<Filter>,
): Array<SkillDecorator> => {
  const result = {} as any;
  const stages = findStages(stageIds);
  stages.forEach((stage) => {
    stage.stageSkills.forEach((stageSkillId) => {
      const stageSkill = findStageSkill(stageSkillId as unknown as number);
      const skill = findSkill(stageSkill.skill as unknown as string);
      if (!result[skill.id]) {
        result[skill.id] = {} as any;
        result[skill.id].skill = skill;
        result[skill.id].useInMonths = 0;
        result[skill.id].tmp = [];
      }
      result[skill.id].useInMonths
          += dateDifferenceInMonth(stage.startedAt, stage.endedAt || new Date());

      result[skill.id].tmp = [
        ...result[skill.id].tmp,
        dateDifferenceInMonth(stage.startedAt, stage.endedAt || new Date())];
    });
  });

  const decoratedSkills = Object.values(result).map((skillBuildObject: any) => new SkillDecorator(
    skillBuildObject.skill,
    skillBuildObject.useInMonths,
  ));

  const filteredSkills = decoratedSkills.filter((decoratedSkill: Record<string, any>) => {
    const filterChecks = filters.map((filter) => {
      const { ...object } = decoratedSkill;
      return filter.values.includes(object[filter.attribute]);
    });
    return filterChecks.every((filterCheck) => filterCheck);
  });

  return orderBy(filteredSkills, ['type', 'id']);
};

export { buildSkillsWithUseInMonths };
