# AI Specification Workflow

1. Run `npx create-ai-spec` in your project root. The command scaffolds `ai_specs` and `agent_rules`.
2. Fill `ai_specs/0_PROMPT.md` with your initial project prompt.
3. Copy the entire content of `agent_rules/MASTER_PROMPT.md` into Codex. Add `ai_specs/0_PROMPT.md` to the chat context and run the master prompt. The agent automatically enforces global standards (semantic HTML, a11y, Mobile-First, strict TypeScript, testing, security, CI/CD, etc.), so make sure your initial prompt does not conflict with these requirements. Агент формирует все три блока за один ответ — SPEC, PLAN и TASKS.
4. Split the Codex response into the three output files:
   - Content between `---SPEC---` and `---PLAN---` goes into `ai_specs/1_SPEC.md`.
   - Content between `---PLAN---` and `---TASKS---` goes into `ai_specs/2_PLAN.md`.
   - Content after `---TASKS---` goes into `ai_specs/3_TASKS.md`. Там вы увидите чекбоксы для каждого этапа плана.
5. When you are ready to implement tasks, open `agent_rules/MASTER_PROMPT.md`, copy the IMPLEMENT block, add `ai_specs/1_SPEC.md`, `ai_specs/2_PLAN.md`, `ai_specs/3_TASKS.md`, and все нужные файлы проекта. Агент пройдет по каждому чекбоксу в 3_TASKS.md последовательно, отмечая выполненные задачи.
