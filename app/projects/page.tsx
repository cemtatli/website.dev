"use client";

import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { projects } from "@/data";

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="mb-5 mt-10"
    >
      <Table className="table-auto">
        <TableCaption>A list of your recent projects.</TableCaption>
        <TableHeader>
          <TableRow className="text-left">
            <TableHead>Project</TableHead>
            <TableHead className="hidden sm:table-cell">Description</TableHead>
            <TableHead className="text-center">Open Source</TableHead>
            <TableHead>GitHub</TableHead>
            <TableHead className="px-2 text-right">Live</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map(p => (
            <TableRow key={p.title}>
              <TableCell className="pr-0 text-left font-medium ">{p.title}</TableCell>
              <TableCell className="hidden max-w-prose cursor-pointer truncate pb-0 font-medium sm:block md:max-w-prose-xl">
                <HoverCard>
                  <HoverCardTrigger>{p.desc}</HoverCardTrigger>
                  <HoverCardContent className="hidden w-full lg:block">{p.desc}</HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell className="hidden flex-1 gap-1 md:flex">
                {p.tech.map(tech => (
                  <Badge className="mr-1 shrink-0 last:mr-0" variant={"outline"} key={tech}>
                    {tech}
                  </Badge>
                ))}
              </TableCell>
              <TableCell className="px-3 text-center">
                {p.openSource === "true" ? "🟢" : ""}
              </TableCell>
              <TableCell>
                <Link target={"_blank"} className="hover:underline" href={p.github}>
                  Repo
                </Link>
              </TableCell>
              <TableCell className="px-2 text-right">
                <Link target={"_blank"} className="hover:underline" href={p.link}>
                  Link
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.section>
  );
};

export default Project;
