# AI Specification Workflow

1. Run `npx create-ai-spec` in your project root. The command scaffolds `ai_specs` and `agent_rules`.
2. Fill `ai_specs/0_PROMPT.md` with your initial project prompt.
3. Copy the entire content of `agent_rules/MASTER_PROMPT.md` into Codex. Add `ai_specs/0_PROMPT.md` to the chat context and run the master prompt. The agent automatically enforces global standards (semantic HTML, a11y, Mobile-First, strict TypeScript, testing, security, CI/CD, etc.) and перезаписывает `ai_specs/1_SPEC.md`, `ai_specs/2_PLAN.md`, `ai_specs/3_TASKS.md`.
4. После ответа агента проверьте обновленные файлы:
   - `ai_specs/1_SPEC.md` — спецификация с привязкой к стандартам.
   - `ai_specs/2_PLAN.md` — нумерованный план.
   - `ai_specs/3_TASKS.md` — чекбоксы по этапам плана.
5. When you are ready to implement tasks, open `agent_rules/MASTER_PROMPT.md`, copy the IMPLEMENT block, add `ai_specs/1_SPEC.md`, `ai_specs/2_PLAN.md`, `ai_specs/3_TASKS.md`, и все нужные файлы проекта. Агент пройдет по каждому чекбоксу последовательно, отмечая выполненные задачи и возвращая обновленный список.
