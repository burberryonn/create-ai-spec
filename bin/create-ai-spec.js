#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const templateRoot = path.join(__dirname, "..", "templates");

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function copyFileWithSkip(source, target) {
  if (fs.existsSync(target)) {
    console.log(`[skip] ${path.relative(projectRoot, target)} already exists`);
    return;
  }

  ensureDirectory(path.dirname(target));
  fs.copyFileSync(source, target);
  console.log(`[create] ${path.relative(projectRoot, target)}`);
}

function copyTemplateDirectory(sourceDir, targetDir) {
  ensureDirectory(targetDir);

  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyTemplateDirectory(sourcePath, targetPath);
    } else if (entry.isFile()) {
      copyFileWithSkip(sourcePath, targetPath);
    }
  }
}

function main() {
  if (!fs.existsSync(templateRoot)) {
    console.error("Template directory is missing. Please reinstall the package.");
    process.exit(1);
  }

  copyTemplateDirectory(templateRoot, projectRoot);
  console.log("AI specification workspace ready.");
}

main();
