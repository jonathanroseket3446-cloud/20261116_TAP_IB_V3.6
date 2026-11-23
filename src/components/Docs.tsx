import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  Cpu,
  Database,
  Layers,
  ShieldAlert,
  Sparkles,
  Terminal,
  Compass,
  CheckCircle2,
  FlaskConical,
  FileSpreadsheet,
  Sliders,
  HelpCircle
} from 'lucide-react';

type DocLang = 'zh' | 'en';
type DocSectionId =
  | 'quickstart'
  | 'pipeline3d'
  | 'tier5'
  | 'algo3d'
  | 'algo1d'
  | 'ptm'
  | 'schema'
  | 'architecture'
  | 'bestpractices'
  | 'glossary';

export default function Docs() {
  const [lang, setLang] = useState<DocLang>('zh');
  const [activeSection, setActiveSection] = useState<DocSectionId>('quickstart');

  const sections: { id: DocSectionId; icon: React.ReactNode; titleZh: string; titleEn: string; badge?: string }[] = [
    { id: 'quickstart', icon: <Compass className="w-4 h-4" />, titleZh: '1. 快速入门与标准工作流', titleEn: '1. Quick Start & Workflow' },
    { id: 'pipeline3d', icon: <Sliders className="w-4 h-4" />, titleZh: '2. 3D IMGT · DSSP · PSA 底层引擎', titleEn: '2. 3D IMGT · DSSP · PSA Engine', badge: 'CORE' },
    { id: 'tier5', icon: <Sparkles className="w-4 h-4" />, titleZh: '3. 5 级色阶与 5 维分群体系', titleEn: '3. 5-Tier Color & 5D Cohort' },
    { id: 'algo3d', icon: <Cpu className="w-4 h-4" />, titleZh: '4. 01 板块：3D 表面斑块与构象算法', titleEn: '4. 01: 3D Surface & CDR Math' },
    { id: 'algo1d', icon: <FlaskConical className="w-4 h-4" />, titleZh: '5. 02 板块：双链耦合生物物理算法', titleEn: '5. 02: Coupled Biophysical Math' },
    { id: 'ptm', icon: <ShieldAlert className="w-4 h-4" />, titleZh: '6. 03 板块：金标准 4 级 PTM 与环区开关', titleEn: '6. 03: Gold-Standard 4-Tier PTM', badge: 'v3.6' },
    { id: 'schema', icon: <FileSpreadsheet className="w-4 h-4" />, titleZh: '7. 全量 53 / 30 列数据字典与语法', titleEn: '7. 53 / 30-Column Canonical Schema' },
    { id: 'architecture', icon: <Database className="w-4 h-4" />, titleZh: '8. 系统架构与远程 HPC 批处理', titleEn: '8. Architecture & Remote HPC' },
    { id: 'bestpractices', icon: <CheckCircle2 className="w-4 h-4" />, titleZh: '9. 抗体工程成药性排雷指南', titleEn: '9. Engineering Best Practices' },
    { id: 'glossary', icon: <HelpCircle className="w-4 h-4" />, titleZh: '10. 原子符号与结构术语速查表', titleEn: '10. Glossary of Symbols & Terms', badge: 'A–Z' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-stone-900 text-white px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-stone-800">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl font-bold tracking-tight">
                {lang === 'zh' ? 'AbDev Studio 系统文档与算法白皮书' : 'AbDev Studio System Documentation & Algorithm Whitepaper'}
              </h2>
              <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-md">
                v3.6.0 Gold-Standard
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-1">
              {lang === 'zh'
                ? '涵盖 OPIG TAP (2024) 传统单抗 (N=1,121) 与 TNP (2025) 纳米抗体 (N=39) 纯 3D 结构驱动流水线、Kabsch-Sander DSSP 环区判定与 4 级 PTM 工业金标准'
                : 'Comprehensive guide for OPIG TAP (2024) mAb (N=1,121) & TNP (2025) Nanobody (N=39) pure 3D structure-driven pipeline, Kabsch-Sander DSSP loop assignment, and 4-Tier PTM Gold Standard'}
            </p>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="inline-flex items-center bg-stone-800 p-1 rounded-xl border border-stone-700 self-start md:self-auto">
          <button
            onClick={() => setLang('zh')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              lang === 'zh' ? 'bg-emerald-600 text-white shadow-sm' : 'text-stone-400 hover:text-white'
            }`}
          >
            中文文档 (ZH)
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              lang === 'en' ? 'bg-emerald-600 text-white shadow-sm' : 'text-stone-400 hover:text-white'
            }`}
          >
            English (EN)
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[760px]">
        {/* Left Navigation Sidebar */}
        <aside className="lg:col-span-3 bg-stone-50/80 border-r border-stone-200 p-4 space-y-1.5">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-400">
            {lang === 'zh' ? '文档章节目录' : 'Documentation Chapters'}
          </div>
          {sections.map((sec) => {
            const active = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                  active
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
                }`}
              >
                <span className="flex items-center gap-2.5 truncate">
                  <span className={active ? 'text-emerald-400' : 'text-stone-400'}>{sec.icon}</span>
                  <span className="truncate">{lang === 'zh' ? sec.titleZh : sec.titleEn}</span>
                </span>
                {sec.badge && (
                  <span
                    className={`ml-2 px-1.5 py-0.5 text-[9px] font-mono rounded ${
                      active ? 'bg-emerald-500/30 text-emerald-300' : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {sec.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Quick Reference Card in Sidebar */}
          <div className="mt-6 p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-2">
            <div className="font-bold text-emerald-950 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-700" />
              <span>{lang === 'zh' ? '算法与悬停提示全覆盖' : '100% Tooltip & Formula Coverage'}</span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              {lang === 'zh'
                ? '工作台中所有表头、指标卡片与分布图均内置了「定义 · 方法 · 公式 · 实例」四段式悬停提示（InfoTooltip），其底层实现与本文档 100% 严丝合缝。'
                : 'Every table header, metric card, and distribution chart in the workspace features a 4-part InfoTooltip (Summary, Method, Formula, Example) 100% synchronized with this specification.'}
            </p>
          </div>
        </aside>

        {/* Right Article Area */}
        <div className="lg:col-span-9 p-6 md:p-10 overflow-y-auto max-h-[880px]">
          {lang === 'zh' ? (
            <ZhDocContent activeSection={activeSection} />
          ) : (
            <EnDocContent activeSection={activeSection} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * CHINESE DOCUMENTATION CONTENT (v3.6.0 Comprehensive Edition)
 * ============================================================================ */
function ZhDocContent({ activeSection }: { activeSection: DocSectionId }) {
  switch (activeSection) {
    case 'quickstart':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 01 · Quick Start</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">快速入门与标准端到端工作流</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              <strong>AbDev Studio (Antibody &amp; Nanobody Developability Workbench)</strong> 是面向治疗性单克隆抗体（mAb Fv，重链 VH + 轻链 VL）与单域纳米抗体（Nanobody / VHH）的<strong>纯 3D 结构驱动型成药性评估平台</strong>。系统将待测抗体的 3D 结构与物理化学属性，投射至牛津大学蛋白信息学组（OPIG）<strong>TAP (2024, N = 1,121)</strong> 与 <strong>TNP (2025, N = 39)</strong> 临床参考分布中，提供定量的分位数评级与精确到单个残基三维构象的 PTM 排雷。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700">STEP 1 · 选择分子模态与导入数据</div>
              <h4 className="font-bold text-stone-900 text-sm">双模态工作台（TAP 2024 vs. TNP 2025）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                在顶部切换 <strong>TAP (2024) · 传统单抗 (VH+VL)</strong> 或 <strong>TNP (2025) · 纳米抗体 (VHH)</strong>：
                <br />• <strong>本地 3D 结构上传</strong>：支持直接拖入多个 <code>.pdb</code> / <code>.cif</code> 三维结构文件（ImmuneBuilder / ABodyBuilder2 / NanoBodyBuilder2 / AlphaFold3 或晶体结构）。
                <br />• <strong>远程 HPC 集群执行</strong>：通过 SSH 连接配备 <code>ANARCI</code> 与 <code>Joy PSA</code> 的 Linux 服务器，对远程目录中的大批量 PDB 结构并行计算。
                <br />• <strong>分析结果 CSV 导入</strong>：直接上传 <code>Analysis_Results_TAP.csv</code>（53 列，含 <code>VL_Type</code>）或 <code>Analysis_Results_TNP.csv</code>（30 列）进行离线可视化与报告导出。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700">STEP 2 · 5 维临床参考队列过滤（TAP）/ 4 维（TNP）</div>
              <h4 className="font-bold text-stone-900 text-sm">动态匹配高度同源的临床参考子集并全局同步</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                在 <strong>Guidelines</strong> 顶部过滤栏，可实时收敛临床参考背景库，并自动持久化同步至 <strong>Results &amp; Compare</strong> 的动态分位数评级与直方图对比：
                <br />1. <strong>临床阶段 (Clinical Stage)</strong>：Approved（已上市）、Phase I / II / III、Preregistration 等；
                <br />2. <strong>基因源性 (Genetics)</strong>：TAP 含 <code>Genetically human</code>、<code>Humanised</code>、<code>Chimeric and/or humanised</code>、<code>Chimeric</code>、<code>Murine</code> 等 9 类；TNP 含 <code>Humanised</code>、<code>Genetically llama</code>、<code>Genetically Alpaca</code> 等 6 类；
                <br />3. <strong>轻链类型 (VL Type · TAP 专属)</strong>：<code>K (Kappa, N=970)</code> vs <code>L (Lambda, N=151)</code>；
                <br />4. <strong>年份与靶点 (Year &amp; Target)</strong>：按 INN 推荐年份或特定抗原靶点精准筛选。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700">STEP 3 · 三大板块全景审查与 PTM 环区同步开关</div>
              <h4 className="font-bold text-stone-900 text-sm">01 3D 表面 · 02 理化性质 · 03 PTM 热点</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                • <strong>01. 3D Surface &amp; CDR</strong>：核查 CDR 长度、表面疏水斑块（PSH）、正/负电荷斑块（PPC/PNC）、Fv 电荷对称性（SFvCSP）或 VHH CDR3 紧凑度（C）与 FR2 四联体，结果表内置基于当前临床子集动态计算的 <code>TAP Overall / TNP Overall</code> 综合警报列；
                <br />• <strong>02. Physicochemical</strong>：审查含 <strong>Sequence Length</strong> 在内的 7 项理化指标（双链耦合等电点 <code>VHVL_pI</code>、生理净电荷、GRAVY 与真实二肽键数加权的 <code>VHVL_Instability</code>）；
                <br />• <strong>03. PTM &amp; IMGT Hotspots</strong>：默认启用与 01 板块 100% 严丝合缝的 <strong>CDR-Loop Only (Default)</strong> 模式，亦可一键开启 <strong>+ FR-Loop (Extended)</strong>（在 Guidelines 与 Results 间实时同步持久化）全面排查骨架暴露环区。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700">STEP 4 · 交互式分布对比与批量导出</div>
              <h4 className="font-bold text-stone-900 text-sm">直方图叠加定位 &amp; 原生数值 Excel / CSV / HTML 报告</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                • 点击表格任意行可展开该抗体的<strong>全指标临床分布直方图</strong>，竖线标示当前候选分子在临床子集中的精确位置及 P5/P25/P75/P95 边界（自动消除 <code>-0.0000</code> 负零显示）；
                <br />• 支持勾选多个候选分子（Max 10）进行并排分布叠加对比；
                <br />• 右上角一键导出带 5 级/4 级颜色编码且保留<strong>原生 Excel 数值格式</strong>（<code>0.0000</code> / <code>0</code>）的 <strong>Excel (.xlsx)</strong>、原始 <strong>CSV</strong>、独立可交互 <strong>HTML 报告</strong>，以及浏览器沙箱安全兼容的 <strong>Raw (.tar.gz)</strong> 结果包。
              </p>
            </div>
          </div>
        </div>
      );

    case 'pipeline3d':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 02 · Pure 3D Structural Engine</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">3D IMGT 编号 · Kabsch-Sander DSSP 二级结构 · Joy PSA 暴露度引擎</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              本系统的每个待测分子均具备真实或高精建模的 3D 结构（<code>.pdb</code> / <code>.cif</code>），<strong>不存在任何退化回纯序列奇偶性或固定侧翼偏移的回退策略（Zero Sequence-Only Fallbacks）</strong>。底层 Python 批处理引擎（<code>TAP_2024_Batch.py</code> 与 <code>TNP_2025_Batch.py</code>）在单次运行中协同执行以下三大结构生物学解析：
            </p>
          </div>

          {/* 2.1 ANARCI IMGT */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-stone-900 text-white text-xs font-mono flex items-center justify-center">1</span>
              <span>ANARCI IMGT 编号与序列-结构精确映射（含插入码处理）</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              脚本首先从 PDB 原子坐标提取各链的氨基酸序列（调用 <code>Bio.SeqUtils.seq1(resname, custom_map=&#123;&quot;UNK&quot;: &quot;X&quot;&#125;)</code>），并调用 <code>ANARCI --scheme imgt</code> 执行标准 IMGT 编号：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                <div className="font-bold text-stone-900 mb-1">IMGT 高变区 (CDR) 与骨架区 (FR) 边界</div>
                <ul className="space-y-1 text-stone-600 font-mono text-[11px]">
                  <li>• FR1  : IMGT 1 – 26   (含保守二硫键 Cys23)</li>
                  <li>• CDR1 : IMGT 27 – 38  (锚点 Trp41 紧随其后)</li>
                  <li>• FR2  : IMGT 39 – 55  (含 VHH 四联体 42, 49, 50, 52)</li>
                  <li>• CDR2 : IMGT 56 – 65</li>
                  <li>• FR3  : IMGT 66 – 104 (含保守二硫键 Cys104)</li>
                  <li>• CDR3 : IMGT 105 – 117 (锚点 Trp118 / Phe118 紧随其后)</li>
                  <li>• FR4  : IMGT 118 – 128</li>
                </ul>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                <div className="font-bold text-stone-900 mb-1">CDR3 对称插入码 (Insertion Codes) 兼容</div>
                <p className="text-stone-600 leading-relaxed text-[11px]">
                  当 CDR3 长度超过 13 AA 时，IMGT 采用在顶部对称插入字母的编号规则（如 <code>111A, 111B ... 112B, 112A</code> 或 <code>111.1, 112.1</code>）。
                  <br />系统不仅完整保留完整编号字符串 <code>imgt_full</code>（如 <code>IMGT111A</code>）用于位点标签输出，同时提取整型主编号 <code>imgt_num = 111</code> 用于区间归属判定，确保所有带插入码的超长 CDR 环残基 100% 被纳入分析。
                </p>
              </div>
            </div>
          </div>

          {/* 2.2 3D Kabsch-Sander DSSP */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-stone-900 text-white text-xs font-mono flex items-center justify-center">2</span>
              <span>3D Kabsch-Sander 主链氢键静电模型：精准区分 CDR/FR 中的 Loop 环与 β-Strand 折叠股</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>核心科学问题</strong>：IMGT 编号区间（27–38, 56–65, 105–117）标定的是高变区（CDR），但 <strong>CDR 区域并不全都是柔性的无规卷曲环（Loop）</strong>！在免疫球蛋白 β-三明治拓扑中，CDR 的首尾两端（如 IMGT 27–28, 37–38, 56–57, 64–65, 105–106, 116–117）往往是反平行 β-折叠股（β-strands B, C, C&apos;, C&apos;&apos;, F, G）向顶部延伸的刚性茎区（Stem），其主链通过紧密的跨股氢键锁定；反之，骨架区（FR1/FR2/FR3）中也包含多段连接相邻 β-股的柔性转角环（如 FR1 B-C 环、FR2 C&apos;-C&apos;&apos; 环、FR3 D-E &quot;CDR4&quot; 环）。
            </p>
            <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2 overflow-x-auto">
              <div className="text-emerald-400 font-bold"># Kabsch &amp; Sander (1983) Biopolymers 22:2577-2637 · 主链氢键静电能公式</div>
              <div>E(donor_i → acceptor_j) = 0.42 × 0.20 × 332.0 × (1/r_ON + 1/r_CH − 1/r_OH − 1/r_CN)   [kcal/mol]</div>
              <div className="text-stone-400">• 酰胺氢重构与断链保护：对 i &gt; 0 且非脯氨酸 (Pro) 且无断链（‖N_i − C_&#123;i-1&#125;‖ ≤ 2.5 Å）的残基，沿前驱羰基反向延伸 H_i = N_i + 1.01 Å × (C_&#123;i-1&#125; − O_&#123;i-1&#125;) / ‖C_&#123;i-1&#125; − O_&#123;i-1&#125;‖</div>
              <div className="text-stone-400">• 氢键判据与 Top-2 限制：|i − j| ≥ 2、r_ON ≤ 5.2 Å、min(r) ≥ 0.5 Å 且 E &lt; −0.5 kcal/mol；每个 N–H 供体与 C=O 受体各自仅保留能量最低的前 2 条氢键</div>
              <div className="text-stone-400">• 刚性构象赋值：检测反平行/平行 β-桥并执行标准 DSSP β-Bulge 梯级延展（min(Δi,Δj) ≤ 2 ∧ max(Δi,Δj) ≤ 5，无断链与发夹穿越），同时对连续 3₁₀ / α / π 螺旋（n ∈ &#123;3,4,5&#125;）赋值为 Strand；其余残基赋值为柔性 Loop 环区</div>
              <div className="text-emerald-300">• 四类组合构象标签：[CDR-Loop]、[CDR-Strand]、[FR-Loop]、[FR-Strand]（详见第 6.3.1 节精确矩阵定义）</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-xs pt-1">
              <div className="p-3 bg-white rounded-xl border border-emerald-200">
                <div className="font-mono font-bold text-emerald-800">[CDR-Loop]</div>
                <p className="text-[11px] text-stone-600 mt-1">位于 IMGT CDR 区间，且 3D DSSP 判定为真柔性环顶（高 PTM 构象异构化敏感区）。</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <div className="font-mono font-bold text-stone-700">[CDR-Strand]</div>
                <p className="text-[11px] text-stone-600 mt-1">位于 IMGT CDR 根部锚点，但 3D 构象属于刚性 β-折叠股茎区（受氢键刚性保护）。</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-200">
                <div className="font-mono font-bold text-amber-800">[FR-Loop]</div>
                <p className="text-[11px] text-stone-600 mt-1">位于 IMGT FR 骨架区，但 3D DSSP 判定为连接两条 β-股的表面柔性转角环。</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <div className="font-mono font-bold text-stone-700">[FR-Strand]</div>
                <p className="text-[11px] text-stone-600 mt-1">位于 IMGT FR 骨架区的核心免疫球蛋白 β-桶折叠股（高度刚性保护）。</p>
              </div>
            </div>
          </div>

          {/* 2.3 Joy PSA RSA */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-stone-900 text-white text-xs font-mono flex items-center justify-center">3</span>
              <span>Joy PSA 侧链相对溶剂可及表面积（Side-Chain RSA ≥ 7.5% 表面暴露阈值）</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              系统调用经典的 <code>psa</code>（Joy 软件包中的 Lee &amp; Richards 溶剂可及表面积程序，探针半径 1.4 Å）解析 <code>.asa</code> 输出文件的每个残基<strong>侧链相对溶剂可及表面积（Relative Side-Chain Surface Accessibility, RSA%，对应 <code>.asa</code> 文件第 50–55 列）</strong>：
            </p>
            <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
              <li>
                <strong>双链复合结构整体计算（Whole Fv Complex Context）</strong>：在传统单抗 TAP 模式下，<code>psa</code> 在完整的 VH+VL 异源二聚体 PDB 上运行。因此，被 VH:VL 结合界面掩埋的残基（如 FR2 的 Val42、Leu50、Trp52 以及 CDR3 根部被对侧链遮挡的残基）其侧链 RSA 自然低于阈值，<strong>自动被判定为包埋态（<code>Buried</code>）</strong>。
              </li>
              <li>
                <strong>统一暴露阈值（RSA_side-chain ≥ 7.5%）</strong>：严格遵循 OPIG Raybould et al. (2019/2024) 标准，当且仅当侧链 RSA ≥ 7.5% 时，残基标记为 <code>Exp</code>（Exposed，表面暴露），同时驱动 <strong>01 板块的 3D 表面斑块积分</strong> 与 <strong>03 板块的 PTM 表面暴露判定</strong>。
              </li>
            </ul>
          </div>
        </div>
      );

    case 'tier5':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 03 · 5-Tier Quantitative Rating</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">5 级定量分位数色阶体系与双向极值预警</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              为什么不能对所有理化指标使用死板的“单侧固定阈值”？因为临床成功抗体的生物物理参数（如 CDR 长度、表面疏水斑块 PSH、等电点 pI、生理净电荷、不稳定指数等）普遍服从<strong>以生理最优稳态为中心的单峰分布</strong>——偏离临床人群分布的<strong>过高（&gt; P95）或过低（&lt; P5）双侧极端尾区</strong>均意味着潜在的结构或工艺风险。
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-3.5 font-semibold">色阶等级 (Tier Badge)</th>
                  <th className="p-3.5 font-semibold">定量分位数区间 (Quantile Range)</th>
                  <th className="p-3.5 font-semibold">定量指标 (01 3D &amp; 02 理化) 含义</th>
                  <th className="p-3.5 font-semibold">定性风险 (03 PTM &amp; 热点) 含义</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-700 text-white">
                      D-GREEN (Optimal)
                    </span>
                  </td>
                  <td className="p-3.5 font-mono font-bold text-emerald-800">25% – 75% (IQR 核心 50%)</td>
                  <td className="p-3.5 text-stone-600">落入当前筛选临床参考队列的核心四分位距（IQR），与主流已上市/临床抗体高度一致。</td>
                  <td className="p-3.5 text-stone-600"><strong>Protected / None</strong>：未检出任何修饰模体，或模体位于刚性 β-折叠股（<code>[*-Strand]</code>）/ 内部包埋区（<code>[*,Buried]</code>，RSA &lt; 7.5%）。</td>
                </tr>
                <tr>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      L-GREEN (Normal)
                    </span>
                  </td>
                  <td className="p-3.5 font-mono font-bold text-emerald-700">5% – 25% 或 75% – 95%</td>
                  <td className="p-3.5 text-stone-600">处于临床常见波动范围内（涵盖中心 90% 临床分布的次优两翼），成药性风险可控。</td>
                  <td className="p-3.5 text-stone-600"><strong>Tier 4 Low Risk (低危慢速)</strong>：暴露环区内的其他 15 种慢速脱酰胺 <code>Nx</code>（含 <code>NP</code>）或 17 种慢速异构化/断裂 <code>Dx</code>（含 <code>DP</code>）。</td>
                </tr>
                <tr>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                      AMBER (Warning)
                    </span>
                  </td>
                  <td className="p-3.5 font-mono font-bold text-amber-700">[Min, 5%) 或 (95%, Max]</td>
                  <td className="p-3.5 text-stone-600">落入临床参考库的<strong>极端 5% 双侧尾区</strong>（但在历史极值 Min–Max 边界内），建议重点复核。</td>
                  <td className="p-3.5 text-stone-600"><strong>Tier 3 Moderate Risk (中危高频)</strong>：暴露环区内的 <code>M, W</code>（氧化）、<code>NS, NT, NN, NH</code>（中危脱酰胺）及 <code>DS, DD</code>（中危异构化）。</td>
                </tr>
                <tr>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-rose-600 text-white">
                      RED (Outlier / High)
                    </span>
                  </td>
                  <td className="p-3.5 font-mono font-bold text-rose-700">&lt; Min 或 &gt; Max (突破极值)</td>
                  <td className="p-3.5 text-stone-600"><strong>彻底突破</strong>所选临床参考库的历史最小值或最大值边界，存在显著物理化学异常。</td>
                  <td className="p-3.5 text-stone-600"><strong>Tier 1 Intolerable &amp; Tier 2 High Risk</strong>：游离半胱氨酸 <code>Free Cys</code>、可变区 N-糖基化 <code>N-X-S/T</code>，或暴露环区极高危 <code>NG</code> / <code>DG</code>。</td>
                </tr>
                <tr>
                  <td className="p-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-stone-100 text-stone-600 border border-stone-300">
                      GRAY (Info)
                    </span>
                  </td>
                  <td className="p-3.5 font-mono text-stone-500">N/A (元数据 / 序列文本)</td>
                  <td className="p-3.5 text-stone-600" colSpan={2}>用于抗体名称、IMGT CDR 序列文本、VHH FR2 特征四联体氨基酸文本等非评判性基础信息列。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'algo3d':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 04 · 01. 3D Surface &amp; CDR Algorithms</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">01 板块：3D 表面斑块与 CDR 空间构象精确数学规范</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              本章节完整列出 <code>TAP_2024_Batch.py</code> 与 <code>TNP_2025_Batch.py</code> 中 01 板块所有 3D 指标的精确数学方程与底层实现细节（参考文献：Raybould et al., <em>PNAS</em> 2019; <em>NAR</em> 2024; <em>mAbs</em> 2025）。
            </p>
          </div>

          {/* 4.1 CDR Vicinity & Salt Bridge */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">4.1 CDR 邻域定义（CDR Vicinity）、暴露判据与分子内盐桥中和</h4>
            <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
              <li>
                <strong>1. 表面暴露残基集合（E_surf）</strong>：由 Joy <code>psa</code> 测算的侧链相对溶剂可及表面积 RSA_side-chain(i) ≥ 7.5% 的残基组成。
              </li>
              <li>
                <strong>2. CDR 邻域集合（V_CDR）</strong>：首先以 IMGT CDR 及其根部锚点区间 <code>IMGT_CDR_ANCHORS = [25–40, 54–67, 103–119]</code> 作为种子区；任何表面暴露残基 k ∈ E_surf，若自身位于种子区间内，或者其任意非氢重原子与种子区任意残基的非氢重原子最小欧氏距离 ≤ 4.0 Å，则纳入 V_CDR。
              </li>
              <li>
                <strong>3. 分子内盐桥疏水重置（Salt-Bridge Neutralization to Gly）</strong>：对于任意表面暴露的酸性残基 a ∈ &#123;Asp, Glu&#125; 的侧链羧基氧原子（<code>OD1, OD2, OE1, OE2</code>）与碱性残基 b ∈ &#123;Arg, Lys&#125; 的侧链胍基/氨基氮原子（<code>NH1, NH2, NZ</code>），若最小距离 d(O_a, N_b) &lt; 3.2 Å，则判定形成分子内盐桥，将两者的疏水标度重置为甘氨酸水平（H_a ← H_Gly = 1.4556, H_b ← H_Gly = 1.4556，精确值 1 + (−0.4 + 4.5) / 9），而电荷权重 q 保持不变。
              </li>
              <li>
                <strong>4. 残基对最小重原子距离（r_ij）</strong>：在所有斑块积分中，两个残基 i, j 之间的空间距离 r_ij 严格定义为<strong>两残基所有非氢重原子坐标集合之间的最小成对欧氏距离</strong>：
                <span className="block font-mono bg-white p-2 rounded-lg border border-stone-200 mt-1 text-stone-800">
                  r_ij = min_&#123;a ∈ HeavyAtoms(i), b ∈ HeavyAtoms(j)&#125; || x_a − x_b ||₂   (作用截断阈值: 0 &lt; r_ij &lt; 7.5 Å)
                </span>
              </li>
            </ul>
          </div>

          {/* 4.2 TAP 2024 Metrics */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">4.2 TAP (2024) 传统双链单抗 (VH+VL) 五大 3D 指标公式</h4>
            <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2.5 overflow-x-auto">
              <div><span className="text-emerald-400 font-bold">1. Total CDR Length (L_tot):</span>  L_tot = ∑_&#123;k=1..3&#125; len(CDRH_k) + ∑_&#123;k=1..3&#125; len(CDRL_k)   [IMGT 27–38, 56–65, 105–117]</div>
              <div><span className="text-emerald-400 font-bold">2. Patches of Surface Hydrophobicity (PSH):</span>  PSH = 2 × ∑_&#123;i &lt; j ∈ V_CDR, r_ij &lt; 7.5Å&#125; (H_i · H_j) / r_ij²</div>
              <div className="text-stone-400 pl-4">其中 H ∈ [1.0, 2.0] 为正向平移归一化 Kyte-Doolittle 疏水值（Arg=1.0000, Gly=1.4556, Ile=2.0000）</div>
              <div><span className="text-emerald-400 font-bold">3. Patches of Positive Charge (PPC):</span>  PPC = 2 × ∑_&#123;i &lt; j ∈ V_CDR, q_i&gt;0, q_j&gt;0, r_ij &lt; 7.5Å&#125; (q_i · q_j) / r_ij²   [q_R = q_K = +1.0, q_H = +0.1]</div>
              <div><span className="text-emerald-400 font-bold">4. Patches of Negative Charge (PNC):</span>  PNC = 2 × ∑_&#123;i &lt; j ∈ V_CDR, q_i&lt;0, q_j&lt;0, r_ij &lt; 7.5Å&#125; (|q_i| · |q_j|) / r_ij²   [|q_D| = |q_E| = 1.0]</div>
              <div><span className="text-emerald-400 font-bold">5. Structural Fv Charge Symmetry Parameter (SFvCSP):</span>  SFvCSP = (∑_&#123;i ∈ Exposed(VH)&#125; q_i) × (∑_&#123;j ∈ Exposed(VL)&#125; q_j)   [单位: e²]</div>
            </div>
          </div>

          {/* 4.3 TNP 2025 Metrics */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">4.3 TNP (2025) 纳米抗体 (VHH) 七大 3D 与骨架特征指标公式</h4>
            <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2.5 overflow-x-auto">
              <div><span className="text-emerald-400 font-bold">1. VHH Total CDR Length (L):</span>  L = len(CDR1: 27–38) + len(CDR2: 56–65) + len(CDR3: 105–117)</div>
              <div><span className="text-emerald-400 font-bold">2. VHH CDR3 Length (L3):</span>  L3 = len(CDR3: IMGT 105–117, 含 111A/112A 等所有插入位点)</div>
              <div><span className="text-emerald-400 font-bold">3. CDR3 Compactness (C):</span>  C = L3 / ρ,   其中 ρ = || Centroid_bb(IMGT 105–117) − Centroid_bb(IMGT 102, 103, 118, 119) ||₂   [单位: AA / Å]</div>
              <div className="text-stone-400 pl-4">注：Centroid_bb 为上述区间残基主链原子 (N, CA, C) 三维坐标的算术几何质心；C 值越大代表 CDR3 越紧密回折贴合 FR2</div>
              <div><span className="text-emerald-400 font-bold">4. VHH PSH / PPC / PNC:</span>  在单域 VHH 的 CDR 邻域 V_CDR (含无轻链遮挡而暴露的 FR2 4.0Å 邻近残基) 上按与 TAP 相同的距离平方反比公式积分</div>
              <div><span className="text-emerald-400 font-bold">5. FR2 Hallmark Tetrad:</span>  提取 IMGT 第 42, 49, 50, 52 四位氨基酸组成四联体（如亲水驼源 FERF / FERG / YQRL vs 疏水人源 VH 样 VGLW）</div>
            </div>
          </div>
        </div>
      );

    case 'algo1d':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 05 · 02. Physicochemical Algorithms</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">02 板块：双链耦合与单链生物物理算法（Biopython ProtParam 标准）</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              在传统单抗中，Fv 是由一条重链可变区（VH）和一条轻链可变区（VL）通过非共价作用组装而成的<strong>异源二聚体（Heterodimer）</strong>。系统在 Python 批处理端与 TypeScript 前端引擎中采用完全一致的物理化学守恒律与 <strong>Biopython <code>Bio.SeqUtils.ProtParam</code> (Bjellqvist et al.) 标准 pKa 参数表</strong>，分别计算双链整体（<code>VHVL_</code>）与单链（<code>VH_</code>、<code>VL_</code>、<code>VHH_</code>）指标。
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-3.5 font-semibold">理化指标</th>
                  <th className="p-3.5 font-semibold">单链/单域公式 (VH / VL / VHH)</th>
                  <th className="p-3.5 font-semibold">双链 Fv 联合公式 (VH+VL)</th>
                  <th className="p-3.5 font-semibold">物理化学守恒依据与防呆设计</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3.5 font-bold text-stone-900">序列长度 (Len)</td>
                  <td className="p-3.5 font-mono">L_chain</td>
                  <td className="p-3.5 font-mono">L_VH + L_VL</td>
                  <td className="p-3.5 text-stone-600">精确统计 PDB 坐标或输入序列中的有效氨基酸残基总数。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-stone-900">分子量 (MW, Da)</td>
                  <td className="p-3.5 font-mono">∑ m(aa_i) − (L−1)×18.0153</td>
                  <td className="p-3.5 font-mono">MW_VH + MW_VL</td>
                  <td className="p-3.5 text-stone-600"><strong>严禁直接拼接字符串求单链 MW</strong>：VH 与 VL 之间无肽键缩合，保留 2 套完整游离末端，差值为 18.0153 Da。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-stone-900">等电点 (pI, pH)</td>
                  <td className="p-3.5 font-mono">Solve Z_chain(pH) = 0</td>
                  <td className="p-3.5 font-mono">Solve Z_VH(pH) + Z_VL(pH) = 0</td>
                  <td className="p-3.5 text-stone-600"><strong>双链耦合滴定求根</strong>：保留 2 个游离 N 端与 2 个游离 C 端，在 pH ∈ [1.0, 14.0] 执行 60 步二分法求根（绝不可取两链 pI 算术平均）。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-stone-900">pH 7.4 净电荷 (e)</td>
                  <td className="p-3.5 font-mono">Z_chain(7.40)</td>
                  <td className="p-3.5 font-mono">Z_VH(7.40) + Z_VL(7.40)</td>
                  <td className="p-3.5 text-stone-600">在生理血液 pH = 7.40 下，复合物总净电荷严格等于各独立亚基净电荷的代数和。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-stone-900">亲疏水指数 (GRAVY)</td>
                  <td className="p-3.5 font-mono">(1/L) ∑ KD(aa_i)</td>
                  <td className="p-3.5 font-mono">(L_VH·G_VH + L_VL·G_VL)/(L_VH+L_VL)</td>
                  <td className="p-3.5 text-stone-600">按残基长度精确加权平均；全系统所有连续计算指标统一保留 4 位小数（<code>:.4f</code>）。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-stone-900">不稳定指数 (II)</td>
                  <td className="p-3.5 font-mono">(10/L) ∑_&#123;i=1..L-1&#125; DIWV(aa_i, aa_&#123;i+1&#125;)</td>
                  <td className="p-3.5 font-mono">((L_VH−1)·II_VH + (L_VL−1)·II_VL)/(L_VH+L_VL−2)</td>
                  <td className="p-3.5 text-stone-600"><strong>消除跨链伪二肽误差</strong>：分别仅扫描 VH 内部 (L_VH − 1) 个和 VL 内部 (L_VL − 1) 个真实肽键，并按<strong>真实二肽键数</strong>加权合并。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Biopython Bjellqvist pKa Table */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">Biopython ProtParam (Bjellqvist et al.) 精确解离常数 pKa 参数表</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              前后端所有 <code>pI</code> 与 <code>Charge_pH7.4</code> 均统一采用与 <code>Bio.SeqUtils.ProtParam.ProteinAnalysis</code> 完全一致的侧链及首尾残基特异性末端 pKa 表：
            </p>
            <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-1.5 overflow-x-auto">
              <div><span className="text-emerald-400">• 碱性正电侧链 (Positive Charged):</span>  Lys (K) = 10.00,  Arg (R) = 12.00,  His (H) = 5.98</div>
              <div><span className="text-emerald-400">• 酸性负电侧链 (Negative Charged):</span>  Asp (D) = 4.05,   Glu (E) = 4.45,   Cys (C) = 9.00,   Tyr (Y) = 10.00</div>
              <div><span className="text-emerald-400">• 游离 N-端 α-NH₃⁺ (按首残基特异):</span>  Ala=7.59, Met=7.00, Ser=6.93, Pro=8.36, Thr=6.82, Val=7.44, Glu=7.70, 其他默认=7.50</div>
              <div><span className="text-emerald-400">• 游离 C-端 α-COO⁻ (按末残基特异):</span>  Asp=4.55, Glu=4.75, 其他默认=3.55</div>
            </div>
          </div>
        </div>
      );

    case 'ptm':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 06 · 03. Gold-Standard 4-Tier PTM &amp; IMGT Hotspots</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">03 板块：工业界金标准 4 级 PTM 风险分层与环区过滤开关</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              翻译后修饰（PTM）与化学降解不仅取决于一级序列模体（Motif），更受<strong>三维局部二级结构柔性（Loop vs. β-Strand）</strong>与<strong>侧链溶剂可及度（Exposed RSA ≥ 7.5% vs. Buried）</strong>的严格支配。例如，天冬酰胺脱酰胺与天冬氨酸异构化必须经历环状琥珀酰亚胺（Succinimide / Asu）五元环过渡态，这要求主链二面角 (φ, ψ) 具备高度局部构象自由度；位于刚性 β-折叠股或内部包埋区的相同序列模体在真实加速稳定性实验中几乎不发生反应。
            </p>
          </div>

          {/* 6.1 4-Tier Gold Standard Table */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-3.5 font-semibold">风险等级 (Risk Tier)</th>
                  <th className="p-3.5 font-semibold">UI 色阶</th>
                  <th className="p-3.5 font-semibold">涵盖修饰类别与精确序列模体 (Motifs)</th>
                  <th className="p-3.5 font-semibold">3D 结构触发条件 (Structural Gating)</th>
                  <th className="p-3.5 font-semibold">物理化学机理与工业界决策</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3.5 font-bold text-rose-800">Tier 1 · Intolerable<br /><span className="text-[11px] font-normal text-stone-500">零容忍级缺陷</span></td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-rose-600 text-white">RED</span></td>
                  <td className="p-3.5 font-mono font-bold text-stone-900">
                    • Unpaired Free Cys (C)<br />
                    • N-Glycosylation (N-X-S/T, X≠P)
                  </td>
                  <td className="p-3.5 text-stone-600">
                    • Free Cys：经 3D 严格 1-to-1 链内/跨链二硫键配对（Level 1 Sγ–Sγ ≤ 3.5 Å、Level 2 弛豫 Cβ–Cβ ≤ 5.0 Å ∧ Sγ–Sγ ≤ 5.5 Å 或缺 Sγ 时 Cβ–Cβ ≤ 4.8 Å、Level 3 保守 IMGT 23–104 / 40–55、Level 4a TAP ds-scFv 跨链 VH:49 ↔ VL:120 及 Level 4b TNP VHH 环间键 IMGT &#123;35–38, 50, 55&#125; ↔ CDR3 105–117 且 Cα–Cα ≤ 18.0 Å）后仍未配对（任何位置）<br />
                    • N-Glyc：经零宽先行断言重叠扫描检出的 N-X-S/T（X≠P），<strong>在可变区（VH/VL/VHH）任意位置均直接触发 Tier 1 RED</strong>（不受 CDR/FR 开关、Loop/Strand 或 Exp/Buried 限制，因 N-糖基化在内质网新生肽链折叠前共翻译发生）
                  </td>
                  <td className="p-3.5 text-stone-600">游离巯基引发二硫键错配与共价二聚体；Fab 糖基化导致严重批次异质性与免疫原性，<strong>必须优先突变消除</strong>。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-rose-700">Tier 2 · High Risk<br /><span className="text-[11px] font-normal text-stone-500">高危化学降解热点</span></td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-rose-600 text-white">RED</span></td>
                  <td className="p-3.5 font-mono font-bold text-stone-900">
                    • Deamidation: NG<br />
                    • Isomerization: DG
                  </td>
                  <td className="p-3.5 font-mono text-rose-800 font-semibold">
                    Exposed (RSA ≥ 7.5%)<br />AND in Loops ([*-Loop,Exp])
                  </td>
                  <td className="p-3.5 text-stone-600">+1 位甘氨酸（Gly）无侧链空间位阻，琥珀酰亚胺环化半衰期仅数天，40°C 加速稳定性极易失活，<strong>强烈建议工程改造</strong>。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-amber-800">Tier 3 · Moderate Risk<br /><span className="text-[11px] font-normal text-stone-500">中危需关注热点</span></td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-amber-100 text-amber-800 border border-amber-300">AMBER</span></td>
                  <td className="p-3.5 font-mono font-bold text-stone-900">
                    • Oxidation: M, W<br />
                    • Deamidation: NS, NT, NN, NH<br />
                    • Isomerization: DS, DD
                  </td>
                  <td className="p-3.5 font-mono text-amber-800 font-semibold">
                    Exposed (RSA ≥ 7.5%)<br />AND in Loops ([*-Loop,Exp])
                  </td>
                  <td className="p-3.5 text-stone-600">暴露柔性环区上的甲硫氨酸 <code>M</code> 与色氨酸 <code>W</code> 易发生光/自由基氧化；<code>NS/NT/NN/NH</code> 与 <code>DS/DD</code> 具中等速率环化风险，需结合制剂缓冲液管控。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-emerald-800">Tier 4 · Low Risk<br /><span className="text-[11px] font-normal text-stone-500">低危慢速全集位点</span></td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">L-GREEN</span></td>
                  <td className="p-3.5 font-mono text-stone-800">
                    • Other 15 Nx (含 NP)<br />
                    • Other 17 Dx (含 DP)
                  </td>
                  <td className="p-3.5 font-mono text-emerald-800 font-semibold">
                    Exposed (RSA ≥ 7.5%)<br />AND in Loops ([*-Loop,Exp])
                  </td>
                  <td className="p-3.5 text-stone-600">+1 位大侧链位阻或脯氨酸无酰胺氢使得生理 pH 下环化极慢（注：<code>DP</code> 仅在强酸 pH &lt; 4.5 高温下发生酸水解，常规制剂为低危 <code>L-GREEN</code>）。</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-emerald-900">Protected / None<br /><span className="text-[11px] font-normal text-stone-500">3D 构象保护或无模体</span></td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-emerald-700 text-white">D-GREEN</span></td>
                  <td className="p-3.5 font-mono text-stone-600">
                    Any Nx, Dx, M, W
                  </td>
                  <td className="p-3.5 font-mono text-stone-600">
                    Buried (RSA &lt; 7.5%)<br />OR in β-Strand ([*-Strand])
                  </td>
                  <td className="p-3.5 text-stone-600">如保守锚点 <code>IMGT Trp41 / Trp118 [FR-Strand,Buried]</code> 或骨架 β-股上的模体，受三维空间掩埋或主链氢键刚性锁定，无实际降解风险。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 6.2 CDR-Loop Only vs + FR-Loop Toggle */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-bold text-emerald-950 text-sm">
                6.2 双模式交互开关：CDR-Loop Only (Default) vs. + FR-Loop (Extended)
              </h4>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-emerald-700 text-white">
                01 与 03 板块 100% 严丝合缝
              </span>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              在 <strong>Guidelines → 03</strong> 与 <strong>Results &amp; Compare → 03. PTM &amp; IMGT Hotspots</strong> 标题栏右侧，系统均提供了实时生效且通过 <code>ptmIncludeFrLoops</code> 持久化全局同步的环区作用域切换开关：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-emerald-200">
                <div className="font-bold text-stone-900 mb-1">模式 A：CDR-Loop Only (Default · 默认推荐)</div>
                <p className="text-stone-600 leading-relaxed text-[11px]">
                  • <strong>风险警报仅聚焦于抗原结合高变区环（<code>[CDR-Loop,Exp]</code>）</strong>，与 01 板块的 IMGT CDR 边界（27–38, 56–65, 105–117）100% 对齐；
                  <br />• 所有位于骨架区（<code>[FR-Loop]</code>、<code>[FR-Strand]</code>）以及 CDR 刚性茎区（<code>[CDR-Strand]</code>）或包埋区（<code>[*,Buried]</code>）的位点，统一归入单元格底部的 <code>Protected: ...</code> 保护态列表中，彻底消除天然胚系骨架保守位点造成的假阳性报警。
                </p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-amber-200">
                <div className="font-bold text-stone-900 mb-1">模式 B：+ FR-Loop (Extended · 扩展全环区模式)</div>
                <p className="text-stone-600 leading-relaxed text-[11px]">
                  • 一键开启后，<strong>将骨架区表面暴露的柔性转角环（<code>[FR-Loop,Exp]</code>，如 FR3 D-E &quot;CDR4&quot; 环 IMGT 81–86 或 FR1/FR2 暴露转角）同步纳入 Tier 1–4 风险评级与颜色高亮</strong>；
                  <br />• 适用于深度人源化改造、回复突变（Back-mutation）、去免疫化或从头设计（De novo design）抗体的全方位 CMC 质量排查。
                </p>
              </div>
            </div>
          </div>

          {/* 6.3 Algorithm Engineering Rationale, Physical Basis & Exact Parameter Specifications */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-bold text-stone-900 text-base">
                6.3 算法工程考量、物理机理与精确参数规范（Engineering Rationale &amp; Parameter Spec）
              </h4>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-stone-900 text-white">
                TAP_2024_Batch.py · TNP_2025_Batch.py · stats.ts
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              为确保 1,121 株临床单抗参考库、纳米抗体参考库以及用户自定义结构在 <strong>ImmuneBuilder (ABodyBuilder2 / NanoBodyBuilder2)</strong> 预测结构与实验晶体结构上均保持高物理保真度与低假阳性率，系统在底层算法层面实施了以下四项核心工程规范：
            </p>

            {/* 6.3.1 Kabsch-Sander DSSP + Top-2 + Beta-Bulge */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h5 className="font-bold text-stone-900 text-sm">
                6.3.1 3D Kabsch–Sander (1983) DSSP 二级结构引擎（含 Top-2 限制与 β-Bulge 梯级延展）
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                系统不依赖固定 IMGT 序号区间硬编码 <code>Loop/Strand</code>，而是直接从三维主链坐标（<code>N, Cα, C, O</code>）实时计算 Kabsch–Sander 静电氢键网络，精准区分柔性环与刚性折叠股：
              </p>
              <div className="p-3.5 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] space-y-1.5 overflow-x-auto">
                <div className="text-emerald-400 font-bold"># 1. 酰胺氢 (N–H) 重建与断链保护</div>
                <div>• 沿前一残基羰基反向延伸：H_i = N_i + 1.01 Å × (C_&#123;i-1&#125; − O_&#123;i-1&#125;) / ‖C_&#123;i-1&#125; − O_&#123;i-1&#125;‖   (Proline 跳过)</div>
                <div>• 断链护栏 (chain_break)：若 ‖N_i − C_&#123;i-1&#125;‖ &gt; 2.5 Å 或缺少主链原子，标记断链并禁止跨断链放置酰胺氢或跨断链合并 β-梯级。</div>
                <div className="text-emerald-400 font-bold pt-1"># 2. 静电氢键能量与 DSSP 标准 Top-2 上限</div>
                <div>• E(donor_i → acceptor_j) = 27.888 × (1/r_ON + 1/r_CH − 1/r_OH − 1/r_CN) kcal/mol   [0.42 × 0.20 × 332]</div>
                <div>• 筛选条件：|i − j| ≥ 2,  r_ON ≤ 5.2 Å,  min(r_ON, r_CH, r_OH, r_CN) ≥ 0.5 Å,  E &lt; −0.5 kcal/mol</div>
                <div>• Top-2 限制：每个 N–H 供体与每个 C=O 受体各自仅保留能量最低的前 2 条氢键，取交集写入矩阵 hbond[donor_i, acceptor_j]。</div>
                <div className="text-emerald-400 font-bold pt-1"># 3. β-桥矩阵下标映射（严格区分 Bond(acceptor, donor) 与 hbond[donor, acceptor]）</div>
                <div>• 平行 β-桥 (i &lt; j):    par1 = hbond[j, i−1] ∧ hbond[i+1, j]   |   par2 = hbond[i, j−1] ∧ hbond[j+1, i]</div>
                <div>• 反平行 β-桥 (i &lt; j):  anti1 = hbond[j, i] ∧ hbond[i, j]       |   anti2 = hbond[j+1, i−1] ∧ hbond[i+1, j−1]</div>
                <div>• 螺旋保护 (3₁₀ / α / π): 连续 n-turn (n ∈ &#123;3, 4, 5&#125;) hbond[i+n, i] ∧ hbond[i+n+1, i+1] 标记内部残基为刚性构象 (Strand)。</div>
                <div className="text-emerald-400 font-bold pt-1"># 4. 标准 DSSP β-Bulge（β-凸起）梯级延展</div>
                <div>• 平行梯级延展：两平行桥 (i1, j1), (i2, j2) 满足 i1 &lt; i2 &lt; j1 &lt; j2,  1 ≤ Δi, Δj,  min(Δi, Δj) ≤ 2 ∧ max(Δi, Δj) ≤ 5 且无断链 → 合并 i1..i2 与 j1..j2 为 Strand。</div>
                <div>• 反平行梯级延展：两反平行桥 (i1, j1), (i2, j2) 满足 i1 &lt; i2 &lt; j2 &lt; j1 (发夹防穿越护栏),  1 ≤ Δi, Δj,  min(Δi, Δj) ≤ 2 ∧ max(Δi, Δj) ≤ 5 且无断链 → 合并 i1..i2 与 j2..j1 为 Strand。</div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>工程考量（为何必须引入 β-Bulge 延展）</strong>：免疫球蛋白 V-域中存在高度保守的天然 β-凸起结构，最典型者为人源 IGHV3 胚系骨架 E-链上的 <code>VH NS@IMGT92</code>（基序 <code>…Q-M91-N92-S93-L94-R-A…</code>）。其两侧 <code>M91</code> 与 <code>L94</code> 分别与对侧 D-链形成标准反平行 β-桥，中间仅凸出 <code>N92–S93</code> 两个残基。若仅检测孤立单桥，约 99% 的 IGHV3 抗体都会把 <code>NS@IMGT92</code> 误标为暴露柔性环 <code>[FR-Loop,Exp]</code>；引入标准 Kabsch–Sander β-bulge 梯级延展后，既与官方 <code>mkdssp</code> 定义完全一致，又通过 <code>i1 &lt; i2 &lt; j2 &lt; j1</code> 严格避免把紧邻 β-发夹的真实 CDR/FR 转角环误标为 Strand。
              </p>
            </div>

            {/* 6.3.2 Overlapping Lookahead PTM Scan */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
              <h5 className="font-bold text-stone-900 text-sm">
                6.3.2 零宽先行断言重叠 PTM 基序扫描（Overlapping Lookahead Scan）
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                常规正则 <code>re.finditer(r&apos;N[A-Z]&apos;)</code> 默认消耗已匹配字符：当序列出现连续基序 <code>NNG</code>、<code>DDG</code>、<code>DDS</code>、<code>NNS</code> 或 <code>NNST</code> 时，第一次匹配会消耗掉第 2 个 <code>N</code> 或 <code>D</code>，导致紧邻的 Tier 2 高危 <code>NG / DG</code> 或 Tier 1 <code>N-Glyc</code> 被静默跳过（实测曾在 TAP 1,121 库中漏检 12 个高危 <code>NG</code> 与 5 个高危 <code>DG</code>）。系统全部改用零宽正向先行断言 <code>(?=(N[^P][ST]))</code>、<code>(?=(N[ACDEFGHIKLMNPQRSTVWY]))</code>、<code>(?=(D[ACDEFGHIKLMNPQRSTVWY]))</code>，实现逐残基步进零漏检，且统一剔除未知占位符 <code>X</code>。
              </p>
            </div>

            {/* 6.3.3 3D Disulfide Pairing & ds-scFv */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h5 className="font-bold text-stone-900 text-sm">
                6.3.3 3D 严格 1-to-1 二硫键配对算法与工程化 ds-scFv（H44–L100）考量
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>核心物理背景（ImmuneBuilder / OpenMM 弛豫排斥效应）</strong>：共价二硫键的理想 <code>Sγ–Sγ</code> 键长约为 <code>2.05 Å</code>，<code>Cβ–Cβ</code> 约 <code>3.5–4.5 Å</code>，<code>Cα–Cα</code> 约 <code>4.0–6.5 Å</code>。但使用深度学习预测模型（<code>ABodyBuilder2</code> / <code>NanoBodyBuilder2</code>）结合 <code>OpenMM</code> 分子力学弛豫时，若模型初始预测的 <code>Sγ–Sγ</code> 略大于拓扑成键阈值（通常约 3.0 Å），或跨链间未预先建立 <code>SSBOND</code> 连接，OpenMM 会将其视作两个<strong>未成键的还原态巯基（–SH）</strong>处理，利用非键范德华排斥将两个硫原子推开至 <code>3.1–7.5 Å</code>，而它们的骨架 <code>Cα–Cα</code> 仍稳固保持在二硫键空间域内。同时，临床双抗/BiTE/免疫毒素中广泛采用 Reiter et al. (1994) 设计的 <strong>ds-scFv 跨链稳定化二硫键 <code>VH:IMGT49(C) ↔ VL:IMGT120(C)</code>（Kabat <code>H44–L100</code>）</strong>——TAP 1,121 临床库中包含 <strong>22 株</strong>该类药物（含已获批重磅药 <code>Cadonilimab_2</code>、<code>Tarlatamab_1</code>、<code>Moxetumomab</code>）。
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>算法设计（严格 1-to-1 全局最优配对）</strong>：TAP 模式将 <code>VH ∪ VL</code> 全部 Cys 放入统一空间图联合求解，TNP 模式在 VHH 内求解。当 Cys 总数 <code>m ≤ 16</code> 时采用<strong>精确状态压缩动态规划（Exact Bitmask DP）</strong>，严格保证每个 Cys 最多只能与 1 个伴侣配对（彻底杜绝双重循环下 3 个相邻 Cys 误判为全配对），优先最大化成对数量，同配对数下最小化总欧氏距离（<code>m &gt; 16</code> 回退最小距离贪心 1-to-1）。四级递进几何判定参数如下：
              </p>
              <div className="overflow-x-auto rounded-xl border border-stone-200">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-stone-800 text-white">
                      <th className="p-2.5 font-semibold">判定层级</th>
                      <th className="p-2.5 font-semibold">适用范围</th>
                      <th className="p-2.5 font-semibold">精确几何阈值参数</th>
                      <th className="p-2.5 font-semibold">物理依据与防假阴性护栏</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Level 1 · 标准共价</td>
                      <td className="p-2.5 text-stone-600">任意链内 / 跨链 Cys 对</td>
                      <td className="p-2.5 font-mono text-emerald-800 font-semibold">Sγ–Sγ ≤ 3.5 Å</td>
                      <td className="p-2.5 text-stone-600">覆盖实验晶体（~2.05 Å）与常规结构预测轻微偏差。</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Level 2 · 弛豫容差</td>
                      <td className="p-2.5 text-stone-600">任意链内 / 跨链（含 CDR-H3 链内环）</td>
                      <td className="p-2.5 font-mono text-emerald-800 font-semibold">(Cβ–Cβ ≤ 5.0 Å ∧ Sγ–Sγ ≤ 5.5 Å)<br />缺 Sγ 回退：Cβ–Cβ ≤ 4.8 Å</td>
                      <td className="p-2.5 text-stone-600">吸收 OpenMM 还原态 –SH 排斥推开的侧链（约 3.5–5.0 Å），双原子联动防止远端自由 Cys 误配；修复缺 Sγ 时误用 3.0 Å 的物理错误。</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Level 3 · 保守骨架复核</td>
                      <td className="p-2.5 text-stone-600">同链 IgV 核心 <code>IMGT 23–104</code><br />同链 FR2 <code>IMGT 40–55</code></td>
                      <td className="p-2.5 font-mono text-emerald-800 font-semibold">23–104：Cα–Cα ≤ 7.5 Å<br />40–55：Cα–Cα ≤ 7.5 Å ∧ (无 Sγ ∨ Sγ–Sγ ≤ 6.5 Å)</td>
                      <td className="p-2.5 text-stone-600">针对全抗体/VHH 高度保守的核心及 FR2 二硫键（如 <code>Sotigalimab</code>、<code>Suvemcitug</code>），在骨干紧邻但侧链弛豫旋转时保持稳定识别。</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Level 4a · ds-scFv 跨链（TAP）</td>
                      <td className="p-2.5 text-stone-600">TAP 跨链 <code>VH:IMGT49 ↔ VL:IMGT120</code><br />（Kabat <code>H44–L100</code>）</td>
                      <td className="p-2.5 font-mono text-emerald-800 font-semibold">异链精确坐标 ∧ Cα–Cα ≤ 8.5 Å ∧ (无 Sγ ∨ Sγ–Sγ ≤ 8.0 Å)</td>
                      <td className="p-2.5 text-stone-600">仅当 VH 49 与 VL 120 <strong>同时突变且 3D 界面贴合</strong>时放行并标注 <code>Inter-chain</code>；单边误突变（如 <code>Cadonilimab_1</code> 仅 VH 含 49C）或结构解离仍严格报 <strong>Tier 1 RED</strong>。</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Level 4b · VHH 环间键（TNP）</td>
                      <td className="p-2.5 text-stone-600">TNP 同链 <code>IMGT &#123;35–38, 50, 55&#125; ↔ CDR3 (105–117)</code></td>
                      <td className="p-2.5 font-mono text-emerald-800 font-semibold">同链双边锚点 ∧ Cα–Cα ≤ 18.0 Å</td>
                      <td className="p-2.5 text-stone-600">覆盖驼源纳米抗体经典 <strong>CDR1/FR2 ↔ CDR3</strong> 环间二硫键（如 <code>Lofacimig_1/2</code>、<code>Lunsekimig3</code>、<code>Envafolimab</code>、<code>Erfonrilimab_2</code>），兼容 NanoBodyBuilder2 无二硫键约束时将 ≥20 aa 长 CDR3 预测偏开的情况；单边孤立 Cys 或非锚点仍严格报 <strong>Tier 1 RED</strong>。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                <strong>前后端一致性原则</strong>：后端统计引擎（<code>stats.ts</code>）解析 CSV 时<strong>优先信任 3D 几何输出的 <code>Free: No / Yes</code> 字段</strong>，仅在缺少 3D 标记的极端遗留数据中才回退至序列 Cys 奇偶性推断，确保跨链配对的奇数链（如 <code>VH: 3 Cys + VL: 3 Cys → 6 (Free: No)</code>）不会被强行误标为游离 Cys。
              </p>
            </div>

            {/* 6.3.4 ANARCI Alignment, Numerical Guards, Reference Validation & Staging */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
              <h5 className="font-bold text-stone-900 text-sm">
                6.3.4 编号对齐、数值下界防护、参考库双校验与流水线稳健性参数
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900">① ANARCI 单域截断与连续子串对齐</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    解析 ANARCI 输出时遇到域分隔符 <code>//</code> 立即截断（只取第一可变域），随后用精确连续子串 <code>seq.find(anarci_seq)</code>（支持未知残基 <code>X</code> 正则回退）映射回 3D 序列坐标，彻底杜绝逐字符贪心匹配将编号错贴至前导标签/信号肽的隐患。同时 TAP 模式强制校验 <code>VH</code> 与 <code>VL</code> 同时存在，缺链直接记为 <code>FAILED</code> 而非静默输出 <code>SFvCSP = 0.00</code>。
                  </p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900">② 3D 表面除零下界、全量程 pI 二分、负零清洗与统一四位小数标准</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    计算 <code>PSH / PPC / PNC</code> 的 <code>1 / r₁₂²</code> 时强制执行距离窗口 <code>1e-6 &lt; r₁₂ &lt; 7.5 Å</code> 并设置 <code>max(r₁₂, 0.1 Å)</code> 防护下界，杜绝 PDB 异常重叠原子触发 <code>ZeroDivisionError</code> 或 <code>inf</code>。前后端双链 <code>VHVL_pI</code> 二分搜索范围统一扩展至 <code>pH ∈ [1.0, 14.0]</code>（60 步迭代，收敛误差 &lt; 10⁻¹⁶）。全链路（Python 批处理 CSV、后端统计分位数 <code>stats.ts</code>、前端结果表、基准分布卡与原生数值 Excel 导出）所有连续数值计算指标统一保留 <strong>4 位小数（<code>:.4f</code>）</strong> 并执行 <code>+ 0.0</code> 清洗消除 IEEE 754 负零（如 <code>-0.0000</code> 规范为 <code>0.0000</code>），避免微小非零值被截断（序列长度与糖基化计数保持精确整数）。
                  </p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900">③ --ref_csv 元数据合并双校验</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    合并临床元数据（Phase / Target / Format / Brand 等）时强制执行「名称 + 序列」双校验：允许 ImmuneBuilder 去除末端 <code>≤ 6 aa</code> 非 Fv 尾巴后的精确连续子串兼容（输出 <code>[INFO]</code>）；序列内部不符则拒绝挂载并告警（传入 <code>--strict_ref</code> 可严格中止）；按序列回退匹配仅在参考库<strong>唯一命中</strong>时启用，杜绝多株同 Fv 序列抗体静默互相覆盖。
                  </p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900">④ 自动化调度参数透传与防覆盖</div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    <code>03_auto_profiler.py</code> 通过标准 CLI 参数显式透传 <code>--psa_bin</code>、<code>--ptm_rsa_cutoff</code>（默认 <code>7.5%</code>）与 <code>--workers</code>，保证用户在 Settings 页面修改的自定义 RSA 阈值在常规分析任务与参考库校准中 100% 一致生效；多子目录递归暂存同名 PDB/CIF 时自动拼接相对路径前缀，彻底消除平铺拷贝互相覆盖风险。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'schema':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 07 · Canonical Data Dictionary</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">统一规范 Schema 数据字典（TAP 53 列 / TNP 30 列）与位点 Token 语法</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Python 批处理脚本（<code>TAP_2024_Batch.py</code> 与 <code>TNP_2025_Batch.py</code>）、系统内置临床参考库（<code>Analysis_Results_TAP.csv</code> 与 <code>Analysis_Results_TNP.csv</code>）以及前端导出表格严格遵循统一的列结构规范。
            </p>
          </div>

          {/* 7.1 PTM Token Grammar */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">7.1 3D 结构 PTM 位点标注语法（Token Grammar）</h4>
            <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2 overflow-x-auto">
              <div className="text-emerald-400 font-bold">标准位点 Token 格式：  &lt;SeqPos&gt;@IMGT&lt;Num&gt;(&lt;Motif&gt;)[&lt;Region&gt;-&lt;SecStruct&gt;,&lt;Exposure&gt;]</div>
              <div>• 示例 1 (Tier 2 RED 高危脱酰胺):     54@IMGT58(NG)[CDR-Loop,Exp]</div>
              <div>• 示例 2 (Tier 3 AMBER 中危氧化):     101@IMGT109(M)[CDR-Loop,Exp]</div>
              <div>• 示例 3 (Tier 4 L-GREEN 低危慢速):   99@IMGT107(DP)[CDR-Loop,Exp]  或  52@IMGT56(NP)[CDR-Loop,Exp]</div>
              <div>• 示例 4 (D-GREEN 3D 折叠股/包埋保护): 36@IMGT41(W)[FR-Strand,Buried]</div>
              <div className="text-stone-400 pt-1">
                单元格完整汇总格式： &quot;&lt;TotalCount&gt; (High: ... | Mod: ... | Low: ... | Protected: ...)&quot;
              </div>
            </div>
          </div>

          {/* 7.2 Column Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-900 text-sm">TAP 2024 传统单抗（精确 53 列）</h4>
                <span className="px-2 py-0.5 text-[11px] font-mono bg-stone-900 text-white rounded">53 Columns</span>
              </div>
              <ul className="text-xs text-stone-600 space-y-1.5 font-mono">
                <li><strong>[1–11] 标识、序列、轻链亚型与临床元数据 (11 列)</strong>:
                  <br />Filename, VH, VL, VL_Type (K/L), Genetics, Highest_Clin_Trial, Est. Status, Year Proposed, Year Recommended, Target, Status
                </li>
                <li><strong>[12–16] 01. 3D 表面与 CDR (5 列)</strong>:
                  <br />Total CDR Length (L_tot), PSH, PPC, PNC, SFvCSP
                </li>
                <li><strong>[17–28] 重链 VH 理化 + PTM (12 列)</strong>:
                  <br />VH_Length, VH_MW, VH_pI, VH_GRAVY, VH_Instability, VH_Charge, VH_NGlyc, VH_NGlycSites, VH_Deamidation, VH_Isomerization, VH_Oxidation, VH_Cys
                </li>
                <li><strong>[29–40] 轻链 VL 理化 + PTM (12 列)</strong>:
                  <br />VL_Length, VL_MW, VL_pI, VL_GRAVY, VL_Instability, VL_Charge, VL_NGlyc, VL_NGlycSites, VL_Deamidation, VL_Isomerization, VL_Oxidation, VL_Cys
                </li>
                <li><strong>[41–52] 双链耦合 Fv 理化 + PTM (12 列)</strong>:
                  <br />VHVL_Length, VHVL_MW, VHVL_pI, VHVL_GRAVY, VHVL_Instability, VHVL_Charge, VHVL_NGlyc, VHVL_NGlycSites, VHVL_Deamidation, VHVL_Isomerization, VHVL_Oxidation, VHVL_Cys
                </li>
                <li><strong>[53] 错误诊断信息 (1 列)</strong>: Error Message</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-900 text-sm">TNP 2025 纳米抗体（精确 30 列）</h4>
                <span className="px-2 py-0.5 text-[11px] font-mono bg-stone-900 text-white rounded">30 Columns</span>
              </div>
              <ul className="text-xs text-stone-600 space-y-1.5 font-mono">
                <li><strong>[1–10] 标识、序列与临床元数据 (10 列)</strong>:
                  <br />Filename, VH, VL, Genetics, Highest_Clin_Trial, Est. Status, Year Proposed, Year Recommended, Target, Status
                </li>
                <li><strong>[11–17] 01. 3D 表面与骨架特征 (7 列)</strong>:
                  <br />Tetrad, L, L3, C, PSH, PPC, PNC
                </li>
                <li><strong>[18–29] 单域 VHH 理化 + PTM (12 列)</strong>:
                  <br />VHH_Length, VHH_MW, VHH_pI, VHH_GRAVY, VHH_Instability, VHH_Charge, VHH_NGlyc, VHH_NGlycSites, VHH_Deamidation, VHH_Isomerization, VHH_Oxidation, VHH_Cys
                </li>
                <li><strong>[30] 错误诊断信息 (1 列)</strong>: Error Message</li>
              </ul>
              <p className="text-[11px] text-stone-500 pt-1 font-sans">
                注：所有连续型浮点数指标（<code>PSH, PPC, PNC, SFvCSP, C, MW, pI, GRAVY, Instability, Charge</code>）统一保留 4 位小数（<code>:.4f</code>）；长度与糖基化计数输出整数；统计引擎加载参考库时会自动忽略 <code>Status ≠ SUCCESS</code> 的失败记录。
              </p>
            </div>
          </div>
        </div>
      );

    case 'architecture':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 08 · System Architecture &amp; Remote HPC</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">系统全栈架构与远程 Linux HPC 集群批处理</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              AbDev Studio 采用 <strong>React 19 + TypeScript + Tailwind CSS + Express 全栈架构</strong>，并内置 <code>ssh2</code> 远程集群调度器与 Python 多进程（<code>multiprocessing.Pool</code>）并行计算脚本。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>前后端双引擎同构与实时重分级</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                • <strong>后端分析与统计层 (<code>/src/server/stats.ts</code>)</strong>：负责加载 <code>Analysis_Results_TAP.csv</code>（N=1,121）与 <code>Analysis_Results_TNP.csv</code>（N=39）临床基线库，在内存中按 <strong>5 维（TAP）/ 4 维（TNP）临床队列过滤条件</strong>实时计算线性插值分位数（含 <code>Length</code> 在内的全量指标 P5, P25, P50, P75, P95, Min, Max）及直方图分箱；
                <br />• <strong>前端动态重分级与全局同步 (<code>filterState.ts</code> + <code>ResultsViewer.tsx</code>)</strong>：临床队列过滤条件与 PTM 环区开关（<code>CDR-Loop Only</code> vs <code>+ FR-Loop</code>）在 Guidelines 与 Results 间实时同步；前端直接解析位点 Token 三维标签零延迟重算 PTM 分级与 <code>TAP/TNP Overall</code> 3D 综合评级，并支持原生数值 Excel <code>.xlsx</code> 导出与浏览器沙箱安全兼容的认证 Blob <code>.tar.gz</code> 归档下载。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Code2 className="w-4 h-4 text-emerald-700" />
                <span>远程 SSH 3D 参考库重校准与命令行用法</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                在 <strong>Settings → Section 3 (Reference Database Management)</strong> 中，您可以直接下载最新的 <code>TAP_2024_Batch.py</code> 与 <code>TNP_2025_Batch.py</code> 脚本，或一键连接远程 Linux 服务器，对远程 3D PDB 目录自动执行全量重算并回传更新本地参考库：
              </p>
              <div className="p-3 bg-stone-900 text-emerald-300 rounded-xl font-mono text-[11px] overflow-x-auto">
                python3 TAP_2024_Batch.py /path/to/mAb_PDBs --workers 8 --ptm_rsa_cutoff 7.5<br />
                python3 TNP_2025_Batch.py /path/to/VHH_PDBs --workers 8 --ptm_rsa_cutoff 7.5
              </div>
            </div>
          </div>
        </div>
      );

    case 'bestpractices':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 09 · Engineering Best Practices</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">治疗性抗体与纳米抗体工程成药性排雷指南</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              结合临床失败与获批抗体的真实经验，以下为使用 AbDev Studio 进行候选分子筛选与理性突变设计的五大黄金法则：
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-sm mb-1">1. 表面疏水斑块（PSH &gt; P95）与高浓度聚集拆解</div>
              <p className="text-stone-600 leading-relaxed">
                当单抗或 VHH 的 <code>PSH</code> 触发 <strong>AMBER / RED</strong> 警报（如 TAP 全库 P95 为 <code>169.50</code>，TNP 全库 P95 为 <code>140.38</code>）时，通常是由于 CDRH3 或 CDRL3 表面存在连续暴露的色氨酸/苯丙氨酸/异亮氨酸簇。建议在不破坏核心结合能的前提下，将边缘暴露疏水残基突变为酪氨酸（Tyr，兼具氢键供体与芳香环）或极性丝氨酸/苏氨酸（Ser/Thr），可显著降低 HIC 滞留时间与自聚集倾向。
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-sm mb-1">2. 正电荷斑块（PPC &gt; P95）与体内异常快清除（Fast Clearance）</div>
              <p className="text-stone-600 leading-relaxed">
                若 <code>PPC</code> 过高（如 TAP 全库 P95 <code>&gt; 1.3402</code>）且 <code>VHVL_pI &gt; 9.2</code>，抗体极易与血管内皮负电糖胺聚糖（HSPG）发生非特异静电粘附（典型反例如临床撤回的 Bococizumab）。可通过将 CDR 外围非关键的 Arg/Lys 突变为 Gln/Asn 或引入邻近 Glu/Asp 形成分子内盐桥来消除正电斑块。
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-sm mb-1">3. 重轻链电荷严重反号（SFvCSP &lt; −6.00 e²）与高浓度粘度激增</div>
              <p className="text-stone-600 leading-relaxed">
                对于皮下注射高浓度单抗制剂（&gt; 120 mg/mL），必须同时核查 <code>SFvCSP</code>（TAP 全库 P5 为 <code>−6.00 e²</code>）、<code>VH_pI</code> 与 <code>VL_pI</code>。若重链带强正电而轻链带强负电（<code>SFvCSP</code> 为强负值），分子间首尾偶极吸引会导致粘度失控。应通过轻链骨架置换或表面电荷微调使 VH 与 VL 同号（<code>SFvCSP ≥ 0</code>）。
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-sm mb-1">4. 纳米抗体（VHH）人源化中的 FR2 四联体与 CDR3 回折协同</div>
              <p className="text-stone-600 leading-relaxed">
                切忌在纳米抗体人源化时将 FR2 特征四联体（IMGT 42, 49, 50, 52，天然驼源为亲水的 <code>FERF / FERG / YQRL</code>）盲目突变为传统人类 VH 的疏水四联体 <code>VGLW</code>！特别是当 CDR3 较短或紧凑度 <code>C</code> 较低（外伸构象）时，暴露的 <code>VGLW</code> 会导致 <code>TNP_PSH</code> 暴增并引发不可逆热聚集。
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 text-sm mb-1">5. 精准利用 3D 环区与暴露度进行 PTM 减法工程（避免过度突变损失亲和力）</div>
              <p className="text-stone-600 leading-relaxed">
                在 PTM 排雷时，优先消除 <strong>Tier 1 (RED: 游离 Cys、N-糖基化)</strong> 与 <strong>Tier 2 (RED: 暴露环区 <code>NG / DG</code>)</strong>；对 <strong>Tier 3 (AMBER: 暴露环区 <code>M, W, NS, NT, NN, NH, DS, DD</code>)</strong> 进行加速稳定性实验验证；而对于被系统标为 <strong>Tier 4 (L-GREEN: 如 <code>DP, NP</code> 等慢速位点)</strong> 或 <strong>Protected (D-GREEN: 位于 <code>[*-Strand]</code> 或 <code>[*,Buried]</code>)</strong> 的位点，切勿盲目突变，以免破坏抗体核心折叠桶或损失抗原亲和力。
              </p>
            </div>
          </div>
        </div>
      );

    case 'glossary':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 10 · Glossary of Symbols &amp; Terms</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">结构生物学原子符号、距离单位与术语速查表</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              为方便抗体工程、生物信息及实验团队成员无障碍阅读本白皮书与界面提示，以下用通俗语言汇总了系统内出现的所有核心原子代号、物理单位与算法简称。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2.5 text-xs">
            <div className="font-bold text-emerald-950 text-sm">为什么会有 Cα、Cβ、Sγ？（氨基酸原子的希腊字母命名法）</div>
            <p className="text-emerald-900 leading-relaxed">
              每个氨基酸都由一根“主链骨架”和一根“侧链支链”组成。结构生物学按<strong>离开主链由近到远的顺序</strong>，依次用希腊字母 <strong>α → β → γ → δ → ε</strong> 给侧链原子编号。以半胱氨酸（Cys, <code>C</code>）为例，它的侧链化学结构是 <code>—CH₂—SH</code>：
            </p>
            <div className="p-3 bg-white rounded-xl border border-emerald-200 font-mono text-[11px] text-stone-800">
              主链中心 <strong>Cα (PDB 写为 CA)</strong>  ──→  侧链第 1 个碳 <strong>Cβ (PDB 写为 CB)</strong>  ──→  侧链末端硫原子 <strong>Sγ (PDB 写为 SG)</strong>
            </div>
            <p className="text-emerald-900 leading-relaxed">
              因此，文档中的 <strong><code>Sγ–Sγ</code></strong> 指的就是<strong>两个半胱氨酸末端硫原子之间的三维直线距离</strong>（标准共价二硫键 <code>—S—S—</code> 键长约 <code>2.05 Å</code>）；<strong><code>Cβ–Cβ</code></strong> 与 <strong><code>Cα–Cα</code></strong> 则分别是它们对应 β-碳、α-碳之间的距离（位置比末端硫原子更稳固，用于在 ImmuneBuilder/OpenMM 弛豫轻微推开硫原子时辅助确认真二硫键）。
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-3 font-semibold w-36">简写 / 符号</th>
                  <th className="p-3 font-semibold w-44">中文全称</th>
                  <th className="p-3 font-semibold">通俗解释与在本系统中的作用</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">Sγ (SG) / Sγ–Sγ</td>
                  <td className="p-3 font-semibold text-stone-800">γ-硫原子 / 硫-硫间距</td>
                  <td className="p-3 text-stone-600">半胱氨酸（Cys）侧链末端的硫原子。两个 <code>Sγ</code> 脱氢相连形成共价二硫键（<code>—S—S—</code>，理想键长 ~2.05 Å）；系统以 <code>Sγ–Sγ ≤ 3.5 Å</code> 作为一级直接成键判据。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">Cα (CA) / Cβ (CB)</td>
                  <td className="p-3 font-semibold text-stone-800">α-碳原子 / β-碳原子</td>
                  <td className="p-3 text-stone-600"><code>Cα</code> 是氨基酸主链的核心骨架碳；<code>Cβ</code> 是侧链往外伸出的第 1 个碳原子。两者不易受预测力场侧链旋转干扰，常用于复核弛豫态二硫键距离。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">Å (Angstrom)</td>
                  <td className="p-3 font-semibold text-stone-800">埃（原子尺度长度单位）</td>
                  <td className="p-3 text-stone-600"><code>1 Å = 0.1 nm = 10⁻¹⁰ m</code>。蛋白中单键约 1.5 Å，氢键约 2.8–3.2 Å，盐桥 &lt; 3.2 Å，表面斑块作用半径为 7.5 Å。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">RSA (%)</td>
                  <td className="p-3 font-semibold text-stone-800">相对溶剂可及表面积</td>
                  <td className="p-3 text-stone-600">氨基酸侧链暴露在水溶液中的面积百分比（<code>0%</code> 完全埋在蛋白内部，<code>100%</code> 完全暴露）。可在 <strong>Settings → PTM Side-Chain RSA Cutoff (%)</strong> 调整，默认 <code>7.5%</code>。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">PSA (Joy)</td>
                  <td className="p-3 font-semibold text-stone-800">溶剂可及表面积计算程序</td>
                  <td className="p-3 text-stone-600">基于 Lee &amp; Richards 滚球法（水分子探针半径 1.4 Å）从 3D PDB 坐标精确计算每个残基侧链 <code>RSA</code> 的底层工具。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">Exp / Buried</td>
                  <td className="p-3 font-semibold text-stone-800">表面暴露 / 内部包埋</td>
                  <td className="p-3 text-stone-600">由 <code>RSA</code> 阈值划分：<code>≥ 7.5%</code> 记为 <code>Exp</code>（接触水分子，易发生降解修饰）；<code>&lt; 7.5%</code> 记为 <code>Buried</code>（埋在内部受保护）。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">DSSP</td>
                  <td className="p-3 font-semibold text-stone-800">蛋白质二级结构判定算法</td>
                  <td className="p-3 text-stone-600">Kabsch &amp; Sander (1983) 提出的经典算法，通过主链 <code>N–H···O=C</code> 静电氢键能量（<code>E &lt; −0.5 kcal/mol</code>）自动区分刚性 β-折叠股（<code>Strand</code>）与柔性环区（<code>Loop</code>）。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">β-Bulge</td>
                  <td className="p-3 font-semibold text-stone-800">β-凸起</td>
                  <td className="p-3 text-stone-600">β-折叠片局部多出 1–2 个残基形成的小鼓包（如人源 IGHV3 骨架 E-链上的 <code>NS@IMGT92</code>），按标准 DSSP 属于折叠带的一部分（<code>Strand</code>），并非真正柔性环。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">ds-scFv</td>
                  <td className="p-3 font-semibold text-stone-800">二硫键稳定化单链抗体</td>
                  <td className="p-3 text-stone-600">人工在重链 <code>IMGT49</code> 与轻链 <code>IMGT120</code>（Kabat <code>H44–L100</code>）各引入 1 个 Cys 形成跨链二硫键来提高热稳定性的工程化抗体格式（TAP 专属 Level 4a 规则）。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">VHH Interloop</td>
                  <td className="p-3 font-semibold text-stone-800">纳米抗体环间二硫键</td>
                  <td className="p-3 text-stone-600">驼源纳米抗体常见的非经典附加二硫键，连接 CDR1/FR2 锚点（<code>IMGT &#123;35–38, 50, 55&#125;</code>）与长 CDR3（<code>IMGT 105–117</code>），用于稳定长环构象（TNP 专属 Level 4b 规则，<code>Cα–Cα ≤ 18.0 Å</code>）。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">VL_Type (K/L)</td>
                  <td className="p-3 font-semibold text-stone-800">轻链亚型（Kappa / Lambda）</td>
                  <td className="p-3 text-stone-600">由 ANARCI 自动识别的轻链类型。TAP 1,121 临床库中 <code>K</code> 占 970 株（86.5%）、<code>L</code> 占 151 株（13.5%），两者在 CDR 长度与电荷分布上存在系统差异。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">IMGT / Kabat</td>
                  <td className="p-3 font-semibold text-stone-800">抗体统一编号体系</td>
                  <td className="p-3 text-stone-600">给不同长度抗体的可变区统一对齐编号的标准。本系统全程以 <code>IMGT</code>（1–128）为基准（CDR1: 27–38, CDR2: 56–65, CDR3: 105–117）。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">N-Glyc</td>
                  <td className="p-3 font-semibold text-stone-800">N-连接糖基化位点</td>
                  <td className="p-3 text-stone-600">序列模体 <code>N-X-S/T</code>（其中 <code>X ≠ P</code>）。因糖基化在内质网翻译折叠前即发生，可变区任意位置出现均直接判为 <code>Tier 1 RED</code>。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">PSH / PPC / PNC</td>
                  <td className="p-3 font-semibold text-stone-800">表面疏水 / 正电 / 负电斑块</td>
                  <td className="p-3 text-stone-600">定量衡量 CDR 邻域三维表面局部疏水性、正电荷或负电荷成片聚集强度的指标。<code>PSH</code> 过高易聚集；<code>PPC</code> 过高易非特异黏附导致体内快清除。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">SFvCSP</td>
                  <td className="p-3 font-semibold text-stone-800">Fv 表面电荷对称性乘积</td>
                  <td className="p-3 text-stone-600">重链（VH）与轻链（VL）表面净电荷的乘积（单位 <code>e²</code>）。强负值代表重轻链一正一负严重不对称，高浓度制剂下易发生偶极吸引导致高黏度。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">C (Compactness)</td>
                  <td className="p-3 font-semibold text-stone-800">纳米抗体 CDR3 紧凑度</td>
                  <td className="p-3 text-stone-600">VHH 专属指标（<code>L3 / ρ</code>，单位 <code>AA/Å</code>）。数值越大说明 CDR3 越紧密地回折贴合在 FR2 表面，有助于遮蔽疏水区、提高稳定性。</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">pI / GRAVY / II</td>
                  <td className="p-3 font-semibold text-stone-800">等电点 / 疏水均值 / 不稳定指数</td>
                  <td className="p-3 text-stone-600"><code>pI</code> 为净电荷为零时的溶液 pH；<code>GRAVY</code> 为序列平均 Kyte-Doolittle 疏水性（负值偏亲水）；<code>II</code> 为 Guruprasad 二肽不稳定指数（通常 &lt; 40 较稳定）。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}

/* ============================================================================
 * ENGLISH DOCUMENTATION CONTENT (v3.6.0 Comprehensive Edition)
 * ============================================================================ */
function EnDocContent({ activeSection }: { activeSection: DocSectionId }) {
  switch (activeSection) {
    case 'quickstart':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 01 · Quick Start</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">Quick Start &amp; End-to-End 3D Workflow</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              <strong>AbDev Studio (Antibody &amp; Nanobody Developability Workbench)</strong> is a pure <strong>3D structure-driven developability assessment platform</strong> for therapeutic monoclonal antibodies (mAb Fv: VH + VL) and single-domain nanobodies (VHH). It benchmarks candidate 3D structures and biophysical properties against the Oxford Protein Informatics Group (OPIG) <strong>TAP (2024, N = 1,121)</strong> and <strong>TNP (2025, N = 39)</strong> clinical reference distributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700">STEP 1 · Modality Selection &amp; Data Ingestion</div>
              <h4 className="font-bold text-stone-900 text-sm">Dual-Modality Engine (TAP 2024 vs. TNP 2025)</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Switch between <strong>TAP (2024) · Conventional mAb (VH+VL)</strong> and <strong>TNP (2025) · Nanobody (VHH)</strong>:
                <br />• <strong>Local 3D PDB/CIF Upload</strong>: Upload <code>.pdb</code> or <code>.cif</code> structures generated by ABodyBuilder2, NanoBodyBuilder2, AlphaFold3, or X-ray crystallography.
                <br />• <strong>Remote Linux HPC Execution</strong>: Connect via SSH to a remote cluster equipped with <code>ANARCI</code> and <code>Joy PSA</code> for high-throughput parallel batch processing.
                <br />• <strong>Pre-computed CSV Import</strong>: Upload <code>Analysis_Results_TAP.csv</code> (53 columns) or <code>Analysis_Results_TNP.csv</code> (30 columns) directly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700">STEP 2 · 5D (TAP) / 4D (TNP) Clinical Cohort Filtering</div>
              <h4 className="font-bold text-stone-900 text-sm">Dynamic Sub-Cohort Benchmarking with Live Sync</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Slice the clinical reference database in <strong>Guidelines</strong> and automatically persist &amp; synchronize the active cohort to <strong>Results &amp; Compare</strong>:
                <br />1. <strong>Clinical Stage</strong>: Approved, Phase I / II / III, Preregistration;
                <br />2. <strong>Genetics</strong>: 9 TAP classes (<code>Genetically human</code>, <code>Humanised</code>, <code>Chimeric and/or humanised</code>, <code>Chimeric</code>, <code>Murine</code>, etc.) &amp; 6 TNP classes (<code>Humanised</code>, <code>Genetically llama</code>, <code>Genetically Alpaca</code>, etc.);
                <br />3. <strong>Light Chain Subtype (VL_Type · TAP only)</strong>: <code>K (Kappa, N=970)</code> vs. <code>L (Lambda, N=151)</code>;
                <br />4. <strong>Year Recommended &amp; Target</strong>: Filter by INN recommendation year or specific antigen target.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700">STEP 3 · 3-Section Profiling &amp; Synced Loop Scope Switch</div>
              <h4 className="font-bold text-stone-900 text-sm">01 3D Surface · 02 Physicochemical · 03 PTM Hotspots</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                • <strong>01. 3D Surface &amp; CDR</strong>: Inspect CDR lengths, PSH, PPC, PNC, SFvCSP (mAb), or CDR3 Compactness (C) and FR2 Hallmark Tetrad (VHH), with a dynamically evaluated <code>TAP Overall / TNP Overall</code> worst-case tier column;
                <br />• <strong>02. Physicochemical</strong>: Evaluate all 7 biophysical metrics including <strong>Sequence Length</strong>, two-chain coupled <code>VHVL_pI</code>, net charge at pH 7.4, GRAVY, and dipeptide-weighted <code>VHVL_Instability</code>;
                <br />• <strong>03. PTM &amp; IMGT Hotspots</strong>: Defaults to <strong>CDR-Loop Only (Default)</strong> (100% aligned with Section 01 CDR boundaries), with an interactive <strong>+ FR-Loop (Extended)</strong> toggle persisted and synchronized across Guidelines and Results.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700">STEP 4 · Interactive Histograms &amp; Native Numeric Export</div>
              <h4 className="font-bold text-stone-900 text-sm">Multi-Target Overlay &amp; Color-Coded Reports</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                • Click any row to expand full-metric clinical distribution histograms with exact P5/P25/P75/P95 boundaries (with signed-zero <code>-0.0000</code> sanitization);
                <br />• Select up to 10 candidates for side-by-side distribution overlay;
                <br />• Export color-coded <strong>Excel (.xlsx)</strong> with true numeric cell values (<code>0.0000</code> / <code>0</code> formats), raw <strong>CSV</strong>, standalone interactive <strong>HTML reports</strong>, and iframe-safe authenticated Blob <strong>Raw (.tar.gz)</strong> archives.
              </p>
            </div>
          </div>
        </div>
      );

    case 'pipeline3d':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 02 · Pure 3D Structural Engine</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">3D IMGT Numbering · Kabsch-Sander DSSP · Joy PSA Engine</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Every antibody processed by AbDev Studio is backed by a 3D structure (<code>.pdb</code> / <code>.cif</code>) with <strong>zero sequence-only fallbacks</strong>. Both <code>TAP_2024_Batch.py</code> and <code>TNP_2025_Batch.py</code> execute a unified 3-stage structural biology pipeline:
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">1. ANARCI IMGT Numbering &amp; Insertion-Code Mapping</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sequences extracted from PDB coordinates (<code>Bio.SeqUtils.seq1(..., custom_map=&#123;&quot;UNK&quot;: &quot;X&quot;&#125;)</code>) are numbered via <code>ANARCI --scheme imgt</code>:
              <br />• <strong>IMGT CDR Regions</strong>: <code>CDR1 = 27–38</code>, <code>CDR2 = 56–65</code>, <code>CDR3 = 105–117</code> (including symmetrical insertion codes such as <code>111A, 111B, 112B, 112A</code>);
              <br />• <strong>IMGT Framework Regions (FR)</strong>: <code>FR1 = 1–26</code>, <code>FR2 = 39–55</code>, <code>FR3 = 66–104</code>, <code>FR4 = 118–128</code>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">2. 3D Kabsch-Sander DSSP Hydrogen-Bond Engine: Distinguishing Loops vs. β-Strands</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Why IMGT CDR ranges alone are not identical to physical loops</strong>: The terminal anchor stems of IMGT CDRs (e.g., IMGT 27–28, 37–38, 56–57, 64–65, 105–106, 116–117) frequently form hydrogen-bonded antiparallel β-strands extending from the immunoglobulin β-barrel, whereas IMGT Framework regions (FR1/FR2/FR3) contain surface-exposed inter-strand turn loops (such as the FR3 D–E &quot;CDR4&quot; loop).
            </p>
            <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-1.5 overflow-x-auto">
              <div className="text-emerald-400 font-bold"># Kabsch &amp; Sander (1983) Biopolymers 22:2577-2637 Backbone Electrostatic H-Bond Energy</div>
              <div>E(donor_i → acceptor_j) = 0.42 × 0.20 × 332.0 × (1/r_ON + 1/r_CH − 1/r_OH − 1/r_CN) &lt; −0.5 kcal/mol</div>
              <div className="text-stone-400">• Amide H placement: H_i = N_i + 1.01 Å × (C_&#123;i-1&#125; − O_&#123;i-1&#125;) / ‖C_&#123;i-1&#125; − O_&#123;i-1&#125;‖ (skipping Proline and chain breaks ‖N_i − C_&#123;i-1&#125;‖ &gt; 2.5 Å).</div>
              <div className="text-stone-400">• Top-2 H-bond cap per donor/acceptor (|i − j| ≥ 2, r_ON ≤ 5.2 Å, min(r) ≥ 0.5 Å), 3₁₀/α/π helix protection, and standard β-bulge ladder extension (min(Δi,Δj) ≤ 2 ∧ max(Δi,Δj) ≤ 5) assign rigid Strand vs. flexible Loop.</div>
              <div className="text-emerald-300">• 4 Composite Structural Tags: [CDR-Loop], [CDR-Strand], [FR-Loop], [FR-Strand]</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">3. Joy PSA Relative Side-Chain Solvent Accessibility (RSA ≥ 7.5%)</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Solvent accessibility is computed on the intact 3D structure (the full VH+VL heterodimer for mAbs, or the single VHH domain for nanobodies) using Joy <code>psa</code>. A residue is classified as surface-exposed (<code>Exp</code>) if and only if its <strong>Relative Side-Chain Surface Accessibility (RSA_side-chain ≥ 7.5%)</strong> (columns 50–55 of the <code>.asa</code> output), and buried (<code>Buried</code>) otherwise.
            </p>
          </div>
        </div>
      );

    case 'tier5':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 03 · 5-Tier Quantitative Rating</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">5-Tier Percentile Color System &amp; Two-Sided Outlier Detection</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Quantitative metrics in Sections 01 and 02 are evaluated against the empirical percentiles (<code>P5, P25, P50, P75, P95, Min, Max</code>) of the dynamically filtered clinical reference cohort:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-3.5 font-semibold">Tier Badge</th>
                  <th className="p-3.5 font-semibold">Percentile Interval</th>
                  <th className="p-3.5 font-semibold">Quantitative Meaning (01 3D &amp; 02 Biophysical)</th>
                  <th className="p-3.5 font-semibold">Qualitative PTM Meaning (03 PTM Hotspots)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-emerald-700 text-white">D-GREEN</span></td>
                  <td className="p-3.5 font-mono font-bold text-emerald-800">25% – 75% (IQR Core)</td>
                  <td className="p-3.5 text-stone-600">Inside the central 50% interquartile range of clinical antibodies.</td>
                  <td className="p-3.5 text-stone-600"><strong>Protected / None</strong>: No PTM motif, or all motifs are buried (RSA &lt; 7.5%) / locked in rigid β-strands (<code>[*-Strand]</code>).</td>
                </tr>
                <tr>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">L-GREEN</span></td>
                  <td className="p-3.5 font-mono font-bold text-emerald-700">5% – 25% or 75% – 95%</td>
                  <td className="p-3.5 text-stone-600">Within the central 90% clinical distribution (normal variation).</td>
                  <td className="p-3.5 text-stone-600"><strong>Tier 4 Low Risk</strong>: Slow deamidation (other 15 <code>Nx</code> incl. <code>NP</code>) or slow isomerization/cleavage (other 17 <code>Dx</code> incl. <code>DP</code>) in exposed loops.</td>
                </tr>
                <tr>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-amber-100 text-amber-800 border border-amber-300">AMBER</span></td>
                  <td className="p-3.5 font-mono font-bold text-amber-700">[Min, 5%) or (95%, Max]</td>
                  <td className="p-3.5 text-stone-600">In the extreme 5% lower or upper tail of the clinical cohort.</td>
                  <td className="p-3.5 text-stone-600"><strong>Tier 3 Moderate Risk</strong>: Exposed loop <code>M, W</code> (oxidation), <code>NS, NT, NN, NH</code> (deamidation), or <code>DS, DD</code> (isomerization).</td>
                </tr>
                <tr>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-rose-600 text-white">RED</span></td>
                  <td className="p-3.5 font-mono font-bold text-rose-700">&lt; Min or &gt; Max</td>
                  <td className="p-3.5 text-stone-600">Exceeds the historical minimum or maximum of the clinical cohort.</td>
                  <td className="p-3.5 text-stone-600"><strong>Tier 1 Intolerable &amp; Tier 2 High Risk</strong>: Unpaired <code>Free Cys</code>, <code>N-X-S/T</code> glycosylation, or exposed loop <code>NG / DG</code>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'algo3d':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 04 · 01. 3D Surface &amp; CDR Mathematical Specification</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">Exact Mathematical Formulations for 01. 3D Surface &amp; CDR Metrics</h3>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">CDR Vicinity Seed, Salt-Bridge Neutralization &amp; Heavy-Atom Distance</h4>
            <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
              <li>• <strong>CDR Vicinity (V_CDR)</strong>: Includes all surface-exposed residues (RSA_side-chain ≥ 7.5%) within <code>IMGT_CDR_ANCHORS = [25–40, 54–67, 103–119]</code> plus any surface-exposed framework residue whose heavy atoms come within ≤ 4.0 Å of any seed heavy atom.</li>
              <li>• <strong>Salt-Bridge Hydrophobicity Reset</strong>: Any surface-exposed Asp/Glu side-chain carboxyl oxygen (<code>OD1, OD2, OE1, OE2</code>) within &lt; 3.2 Å of any surface-exposed Arg/Lys side-chain nitrogen (<code>NH1, NH2, NZ</code>) has its normalized Kyte-Doolittle hydrophobicity reset to Glycine (H ← H_Gly = 1.4556, exact 1 + (−0.4 + 4.5) / 9), while keeping its electrostatic charge q.</li>
              <li>• <strong>Minimum Inter-Residue Heavy-Atom Distance (r_ij)</strong>: r_ij = min_&#123;a ∈ i, b ∈ j&#125; ||x_a − x_b||₂ across all non-hydrogen heavy atoms, evaluated for all pairs with 0 &lt; r_ij &lt; 7.5 Å.</li>
            </ul>
            <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2 overflow-x-auto">
              <div>• PSH = 2 × ∑_&#123;i &lt; j ∈ V_CDR, r_ij &lt; 7.5Å&#125; (H_i · H_j) / r_ij²   (H ∈ [1.0, 2.0])</div>
              <div>• PPC = 2 × ∑_&#123;i &lt; j ∈ V_CDR, q_i&gt;0, q_j&gt;0, r_ij &lt; 7.5Å&#125; (q_i · q_j) / r_ij²   (q_R=q_K=+1.0, q_H=+0.1)</div>
              <div>• PNC = 2 × ∑_&#123;i &lt; j ∈ V_CDR, q_i&lt;0, q_j&lt;0, r_ij &lt; 7.5Å&#125; (|q_i| · |q_j|) / r_ij²   (|q_D|=|q_E|=1.0)</div>
              <div>• SFvCSP (mAb) = (∑_&#123;i ∈ Exposed(VH)&#125; q_i) × (∑_&#123;j ∈ Exposed(VL)&#125; q_j)   [e²]</div>
              <div>• CDR3 Compactness C (VHH) = L3 / || Centroid_bb(IMGT 105–117) − Centroid_bb(IMGT 102, 103, 118, 119) ||₂   [AA / Å, backbone N, CA, C]</div>
            </div>
          </div>
        </div>
      );

    case 'algo1d':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 05 · 02. Two-Chain Coupled Biophysical Math</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">Two-Chain Coupled vs. Single-Chain Biophysical Algorithms</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Both Python batch scripts and the TypeScript calculation engine strictly enforce heterodimer physical conservation laws and the exact <strong>Biopython <code>Bio.SeqUtils.ProtParam</code> (Bjellqvist et al.) pKa table</strong>:
            </p>
          </div>

          <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2 overflow-x-auto">
            <div><span className="text-emerald-400">• Two-Chain Molecular Weight:</span>     VHVL_MW = MW(VH) + MW(VL)   [2 separate chains, 2×18.0153 Da terminal water retained]</div>
            <div><span className="text-emerald-400">• Two-Chain Coupled pI:</span>           Solve Z_VH(pH) + Z_VL(pH) = 0 on pH ∈ [1.0, 14.0] via 60-step bisection (2 N-termini + 2 C-termini)</div>
            <div><span className="text-emerald-400">• Two-Chain Net Charge (7.4):</span>     VHVL_Charge_pH7.4 = Z_VH(7.40) + Z_VL(7.40)</div>
            <div><span className="text-emerald-400">• Length-Weighted GRAVY:</span>          VHVL_GRAVY = (L_VH · GRAVY_VH + L_VL · GRAVY_VL) / (L_VH + L_VL)   [unified :.4f precision]</div>
            <div><span className="text-emerald-400">• Dipeptide-Weighted Instability:</span> VHVL_II = ((L_VH − 1) · II_VH + (L_VL − 1) · II_VL) / (L_VH + L_VL − 2)   [true peptide-bond count]</div>
            <div className="pt-2 text-stone-400"># Biopython ProtParam (Bjellqvist et al.) pKa Constants:</div>
            <div className="text-stone-300">Pos: K=10.0, R=12.0, H=5.98 | Neg: D=4.05, E=4.45, C=9.0, Y=10.0</div>
            <div className="text-stone-300">N-term: A=7.59, M=7.0, S=6.93, P=8.36, T=6.82, V=7.44, E=7.7, default=7.5 | C-term: D=4.55, E=4.75, default=3.55</div>
          </div>
        </div>
      );

    case 'ptm':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 06 · 03. Gold-Standard 4-Tier PTM &amp; IMGT Hotspots</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">Gold-Standard 4-Tier PTM Risk System &amp; Loop Scope Switch</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Every PTM motif is gated by its 3D IMGT coordinate, 3D Kabsch-Sander DSSP secondary structure (<code>Loop</code> vs. <code>Strand</code>), and Joy PSA side-chain solvent accessibility (RSA ≥ 7.5% <code>Exp</code> vs. <code>Buried</code>):
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-3.5 font-semibold">Risk Tier</th>
                  <th className="p-3.5 font-semibold">Badge</th>
                  <th className="p-3.5 font-semibold">Motifs</th>
                  <th className="p-3.5 font-semibold">3D Structural Gating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3.5 font-bold text-rose-800">Tier 1 · Intolerable</td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-rose-600 text-white">RED</span></td>
                  <td className="p-3.5 font-mono">Unpaired Free Cys (C); N-Glycosylation (N-X-S/T, X≠P)</td>
                  <td className="p-3.5 text-stone-600">Unpaired Free Cys after strict 1-to-1 intra/inter-chain 3D pairing (Level 1 Sγ–Sγ ≤ 3.5 Å, Level 2 relaxed Cβ–Cβ ≤ 5.0 Å ∧ Sγ–Sγ ≤ 5.5 Å or missing-Sγ Cβ–Cβ ≤ 4.8 Å, Level 3 canonical IMGT 23–104 / 40–55, Level 4a TAP ds-scFv VH:IMGT49 ↔ VL:IMGT120, and Level 4b TNP VHH interloop IMGT &#123;35–38, 50, 55&#125; ↔ CDR3 105–117 with Cα–Cα ≤ 18.0 Å) anywhere; overlapping N-Glyc (N-X-S/T, X≠P) anywhere in the variable domain (co-translational ER glycosylation, regardless of CDR/FR, Loop/Strand, or exposure).</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-rose-700">Tier 2 · High Risk</td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-rose-600 text-white">RED</span></td>
                  <td className="p-3.5 font-mono font-bold">NG (Deamidation), DG (Isomerization)</td>
                  <td className="p-3.5 font-mono text-rose-800">Exposed (RSA ≥ 7.5%) &amp; in Loops ([*-Loop,Exp])</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-amber-800">Tier 3 · Moderate Risk</td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-amber-100 text-amber-800 border border-amber-300">AMBER</span></td>
                  <td className="p-3.5 font-mono font-bold">M, W (Oxidation); NS, NT, NN, NH (Deamidation); DS, DD (Isomerization)</td>
                  <td className="p-3.5 font-mono text-amber-800">Exposed (RSA ≥ 7.5%) &amp; in Loops ([*-Loop,Exp])</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-emerald-800">Tier 4 · Low Risk</td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">L-GREEN</span></td>
                  <td className="p-3.5 font-mono">All other 15 Nx (incl. NP) and all other 17 Dx (incl. DP)</td>
                  <td className="p-3.5 font-mono text-emerald-800">Exposed (RSA ≥ 7.5%) &amp; in Loops ([*-Loop,Exp])</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-emerald-900">Protected / None</td>
                  <td className="p-3.5"><span className="px-2.5 py-1 rounded-md font-bold bg-emerald-700 text-white">D-GREEN</span></td>
                  <td className="p-3.5 font-mono">Any Nx, Dx, M, W</td>
                  <td className="p-3.5 font-mono text-stone-600">Buried (RSA &lt; 7.5%) OR in β-Strand ([*-Strand])</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 6.2 English Engineering Rationale & Parameter Specifications */}
          <div className="space-y-4 pt-2">
            <h4 className="font-bold text-stone-900 text-base">
              6.2 Algorithm Engineering Rationale, Physical Basis &amp; Exact Parameter Specifications
            </h4>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2.5 text-xs text-stone-600 leading-relaxed">
              <div className="font-bold text-stone-900 text-sm">1. 3D Kabsch–Sander (1983) DSSP Engine with Top-2 Limit &amp; β-Bulge Ladder Extension</div>
              <p>
                Amide hydrogens are placed along the preceding carbonyl vector (<code>1.01 Å</code>, skipping Proline and chain breaks where <code>‖N_i − C_&#123;i-1&#125;‖ &gt; 2.5 Å</code>). Electrostatic H-bonds use <code>E = 27.888 × (1/r_ON + 1/r_CH − 1/r_OH − 1/r_CN) &lt; −0.5 kcal/mol</code> (<code>|i − j| ≥ 2</code>, <code>r_ON ≤ 5.2 Å</code>, <code>min(r) ≥ 0.5 Å</code>). Following standard DSSP, each N–H donor and C=O acceptor retains at most its 2 lowest-energy H-bonds before populating <code>hbond[donor_i, acceptor_j]</code>. Both parallel/antiparallel β-bridges use exact transposed indices matching <code>Bond(acceptor, donor) ≡ hbond[donor, acceptor]</code>, followed by standard Kabsch–Sander <strong>β-bulge ladder extension</strong> (<code>min(Δi, Δj) ≤ 2 ∧ max(Δi, Δj) ≤ 5</code> with chain-break and hairpin turn-crossing guards <code>i1 &lt; i2 &lt; j2 &lt; j1</code> / <code>i1 &lt; i2 &lt; j1 &lt; j2</code>) so conserved IgV β-bulges such as IGHV3 E-strand <code>VH NS@IMGT92</code> are accurately classified as <code>Strand</code> in full agreement with <code>mkdssp</code>.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs text-stone-600 leading-relaxed">
              <div className="font-bold text-stone-900 text-sm">2. Overlapping Lookahead PTM Motif Scanning</div>
              <p>
                All motif scanners use zero-width positive lookaheads—<code>(?=(N[^P][ST]))</code>, <code>(?=(N[ACDEFGHIKLMNPQRSTVWY]))</code>, and <code>(?=(D[ACDEFGHIKLMNPQRSTVWY]))</code>—preventing consecutive motifs like <code>NNG</code>, <code>DDG</code>, <code>DDS</code>, or <code>NNST</code> from consuming the adjacent residue and missing Tier 1/2 hotspots.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs text-stone-600 leading-relaxed">
              <div className="font-bold text-stone-900 text-sm">3. Strict 1-to-1 3D Disulfide Matching &amp; Engineered ds-scFv (H44–L100) Verification</div>
              <p>
                To account for ImmuneBuilder/OpenMM unbonded thiol repulsion (where unlinked –SH pairs are pushed apart to <code>3.1–7.5 Å</code> while backbones remain locked) and clinical disulfide-stabilized scFvs (22 drugs in the 1,121 TAP reference library including <code>Cadonilimab_2</code>, <code>Tarlatamab_1</code>, and <code>Moxetumomab</code>), all Cys residues across <code>VH ∪ VL</code> (or <code>VHH</code>) are solved jointly via exact Bitmask DP 1-to-1 matching (<code>m ≤ 16</code>, maximizing pair count then minimizing total distance) using a 4-level geometric hierarchy:
              </p>
              <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] space-y-1 overflow-x-auto">
                <div>• Level 1 (Standard Covalent, any pair):   Sγ–Sγ ≤ 3.5 Å</div>
                <div>• Level 2 (OpenMM Relaxation, any pair):   (Cβ–Cβ ≤ 5.0 Å ∧ Sγ–Sγ ≤ 5.5 Å)  |  missing Sγ fallback: Cβ–Cβ ≤ 4.8 Å</div>
                <div>• Level 3 (Canonical Same-Chain IgV):      IMGT 23–104: Cα–Cα ≤ 7.5 Å  |  FR2 IMGT 40–55: Cα–Cα ≤ 7.5 Å ∧ (Sγ–Sγ ≤ 6.5 Å)</div>
                <div>• Level 4a (ds-scFv Inter-Chain, TAP only): VH:IMGT49 ↔ VL:IMGT120 (Kabat H44–L100): opposite chains ∧ Cα–Cα ≤ 8.5 Å ∧ (Sγ–Sγ ≤ 8.0 Å)</div>
                <div>• Level 4b (VHH Interloop, TNP only):      IMGT &#123;35–38, 50, 55&#125; ↔ CDR3 (IMGT 105–117): same chain ∧ Cα–Cα ≤ 18.0 Å</div>
              </div>
              <p className="text-[11px] text-stone-500">
                Single-sided mutations (e.g., <code>Cadonilimab_1</code> carrying only VH IMGT49 without VL IMGT120) or dissociated geometries (<code>Cα–Cα &gt; 8.5 Å</code>) remain strictly flagged <strong>Tier 1 RED (Free: Yes)</strong>. Backend <code>stats.ts</code> prioritizes explicit 3D <code>Free: No/Yes</code> flags over single-chain Cys odd/even parity.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs text-stone-600 leading-relaxed">
              <div className="font-bold text-stone-900 text-sm">4. ANARCI Alignment, Numerical Guards, Reference Sequence Validation &amp; Pipeline Forwarding</div>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                <li><strong>ANARCI First-Domain &amp; Contiguous Alignment</strong>: Truncates ANARCI output at <code>//</code> and aligns via exact contiguous substring <code>seq.find(anarci_seq)</code> (with <code>X</code> wildcard fallback). TAP enforces mandatory presence of both VH and VL.</li>
                <li><strong>Numerical Bounds, Signed-Zero Guard &amp; Unified 4-Decimal Standard</strong>: PSH/PPC/PNC enforce <code>1e-6 &lt; r₁₂ &lt; 7.5 Å</code> and <code>max(r₁₂, 0.1 Å)</code> floor against overlapping atoms; two-chain <code>VHVL_pI</code> bisection spans <code>pH ∈ [1.0, 14.0]</code> (60 iterations). All computed continuous metrics across Python CSV outputs, backend quantile statistics, UI tables, benchmark cards, and native numeric Excel exports uniformly retain <strong>4 decimal places (<code>:.4f</code>)</strong> with <code>+ 0.0</code> signed-zero cleanup (eliminating <code>-0.0000</code>), while lengths and counts remain exact integers.</li>
                <li><strong>--ref_csv Dual Validation</strong>: Validates both antibody ID and VH/VL sequence compatibility (allowing ≤ 6 aa terminal non-Fv trimming with <code>[INFO]</code> logging; rejects internal mismatches; supports <code>--strict_ref</code>; sequence fallback activates only on unique hits).</li>
                <li><strong>Auto-Profiler Forwarding &amp; Collision-Free Staging</strong>: <code>03_auto_profiler.py</code> forwards <code>--psa_bin</code>, <code>--ptm_rsa_cutoff</code> (default <code>7.5%</code>), and <code>--workers</code>, and disambiguates identical filenames across subdirectories during staging.</li>
              </ul>
            </div>
          </div>
        </div>
      );

    case 'schema':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 07 · Canonical Schema</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">53-Column TAP &amp; 30-Column TNP Canonical Data Dictionary</h3>
          </div>
          <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2.5 overflow-x-auto">
            <div className="text-emerald-400 font-bold"># Token Format: &lt;SeqPos&gt;@IMGT&lt;Num&gt;(&lt;Motif&gt;)[&lt;CDR|FR&gt;-&lt;Loop|Strand&gt;,&lt;Exp|Buried&gt;]</div>
            <div><span className="text-emerald-300 font-bold">• TAP 2024 (Exact 53 Columns):</span>
              <br />  [1–11]  Filename, VH, VL, VL_Type (K/L), Genetics, Highest_Clin_Trial, Est. Status, Year Proposed, Year Recommended, Target, Status
              <br />  [12–16] Total CDR Length (L_tot), PSH, PPC, PNC, SFvCSP
              <br />  [17–28] VH_Length, VH_MW, VH_pI, VH_GRAVY, VH_Instability, VH_Charge, VH_NGlyc, VH_NGlycSites, VH_Deamidation, VH_Isomerization, VH_Oxidation, VH_Cys
              <br />  [29–40] VL_Length, VL_MW, VL_pI, VL_GRAVY, VL_Instability, VL_Charge, VL_NGlyc, VL_NGlycSites, VL_Deamidation, VL_Isomerization, VL_Oxidation, VL_Cys
              <br />  [41–52] VHVL_Length, VHVL_MW, VHVL_pI, VHVL_GRAVY, VHVL_Instability, VHVL_Charge, VHVL_NGlyc, VHVL_NGlycSites, VHVL_Deamidation, VHVL_Isomerization, VHVL_Oxidation, VHVL_Cys
              <br />  [53]    Error Message
            </div>
            <div><span className="text-emerald-300 font-bold">• TNP 2025 (Exact 30 Columns):</span>
              <br />  [1–10]  Filename, VH, VL, Genetics, Highest_Clin_Trial, Est. Status, Year Proposed, Year Recommended, Target, Status
              <br />  [11–17] Tetrad, L, L3, C, PSH, PPC, PNC
              <br />  [18–29] VHH_Length, VHH_MW, VHH_pI, VHH_GRAVY, VHH_Instability, VHH_Charge, VHH_NGlyc, VHH_NGlycSites, VHH_Deamidation, VHH_Isomerization, VHH_Oxidation, VHH_Cys
              <br />  [30]    Error Message
            </div>
          </div>
        </div>
      );

    case 'architecture':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 08 · System Architecture</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">Full-Stack Architecture &amp; Remote HPC Integration</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Built with React 19, TypeScript, Tailwind CSS, and an Express backend with <code>ssh2</code> remote cluster orchestration. The backend statistics engine (<code>/src/server/stats.ts</code>) serves real-time 5D (TAP, N=1,121) / 4D (TNP, N=39) filtered quantiles (including <code>Length</code>), while <code>filterState.ts</code> synchronizes active cohort filters and the PTM Loop Scope toggle (<code>ptmIncludeFrLoops</code>) live between <strong>Guidelines</strong> and <strong>Results &amp; Compare</strong>—driving dynamic <code>TAP/TNP Overall</code> flags, true numeric Excel <code>.xlsx</code> exports, and iframe-safe authenticated Blob <code>.tar.gz</code> archive downloads. You can download <code>TAP_2024_Batch.py</code>, <code>TNP_2025_Batch.py</code>, and pre-calibrated reference CSVs directly from <strong>Settings → Section 3</strong>, or trigger remote SSH calibration.
            </p>
          </div>
        </div>
      );

    case 'bestpractices':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 09 · Best Practices</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">Antibody &amp; Nanobody Developability Engineering Guidelines</h3>
            <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed list-disc list-inside">
              <li><strong>Disrupt Surface Hydrophobic Patches (PSH &gt; P95: TAP 169.50 / TNP 140.38)</strong>: Replace solvent-exposed aromatic/aliphatic clusters on CDR loops with Tyr or Ser/Thr to prevent self-association and high HIC retention.</li>
              <li><strong>Mitigate Positive Charge Patches (PPC &gt; P95: TAP 1.3402 / TNP 0.3681)</strong>: Excess positive patches cause non-specific binding to negatively charged endothelial heparan sulfate proteoglycans (HSPG) and rapid in vivo clearance.</li>
              <li><strong>Maintain Fv Charge Symmetry (SFvCSP ≥ 0 e²; TAP P5 = −6.00 e²)</strong>: Opposite net surface charges between VH and VL (strongly negative SFvCSP) drive intermolecular dipole-dipole cross-linking and high viscosity at &gt;120 mg/mL.</li>
              <li><strong>Preserve VHH FR2 Hydrophilic Tetrad (IMGT 42, 49, 50, 52)</strong>: Avoid mutating camelid hydrophilic tetrads (<code>FERF/FERG/YQRL</code>) to hydrophobic human VH-like <code>VGLW</code> unless compensated by a high-compactness (high <code>C</code>) folded-back CDR3.</li>
              <li><strong>Prioritize 3D Structure-Gated PTM Remediation</strong>: Focus mutagenesis on Tier 1 (<code>RED</code>: Free Cys, N-Glyc) and Tier 2 (<code>RED</code>: exposed loop <code>NG/DG</code>), monitor Tier 3 (<code>AMBER</code>: exposed loop <code>M, W, NS, NT, NN, NH, DS, DD</code>), and avoid unnecessary mutations on Tier 4 (<code>L-GREEN</code>: e.g., <code>DP, NP</code>) or 3D-protected (<code>D-GREEN</code>: <code>[*-Strand]</code> or <code>[*,Buried]</code>) residues.</li>
            </ul>
          </div>
        </div>
      );

    case 'glossary':
      return (
        <div className="space-y-6 text-stone-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">Chapter 10 · Glossary of Symbols &amp; Terms</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">Glossary of Structural Biology Symbols, Units &amp; Abbreviations</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Plain-language reference for all atomic symbols, distance units, and bioinformatics abbreviations used across AbDev Studio and this whitepaper.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2 text-xs text-emerald-900 leading-relaxed">
            <div className="font-bold text-emerald-950 text-sm">Understanding Greek-Letter Atom Names (Cα, Cβ, Sγ)</div>
            <p>
              Atoms along an amino acid side chain are labeled with Greek letters <strong>α → β → γ → δ → ε</strong> moving outward from the protein backbone. For Cysteine (<code>—CH₂—SH</code>): <strong>Cα (PDB: <code>CA</code>)</strong> is the central backbone carbon, <strong>Cβ (PDB: <code>CB</code>)</strong> is the first side-chain carbon, and <strong>Sγ (PDB: <code>SG</code>)</strong> is the terminal sulfur atom. Thus <strong><code>Sγ–Sγ</code></strong> is simply the 3D distance between the two terminal sulfur atoms of two Cysteine residues (ideal covalent disulfide bond <code>—S—S—</code> ≈ <code>2.05 Å</code>).
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-3 font-semibold w-40">Symbol / Term</th>
                  <th className="p-3 font-semibold">Plain-Language Definition &amp; Role in AbDev Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">Sγ (SG) / Sγ–Sγ</td>
                  <td className="p-3 text-stone-600">Cysteine terminal sulfur atom and the 3D distance between two Cysteine sulfurs (≤ 3.5 Å = Level 1 covalent disulfide bond).</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">Cα (CA) / Cβ (CB)</td>
                  <td className="p-3 text-stone-600">Backbone α-carbon and first side-chain β-carbon; more stable under force-field relaxation and used to verify relaxed disulfide bonds.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">Å (Angstrom)</td>
                  <td className="p-3 text-stone-600">Atomic distance unit (<code>1 Å = 0.1 nm = 10⁻¹⁰ m</code>). Disulfide bond ≈ 2.05 Å; salt bridge &lt; 3.2 Å; patch cutoff = 7.5 Å.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">RSA (%) / PSA</td>
                  <td className="p-3 text-stone-600">Relative Solvent Accessibility (%) of a side chain computed by Joy <code>psa</code> (1.4 Å water probe). Configurable in Settings (default <code>7.5%</code>: <code>Exp</code> vs. <code>Buried</code>).</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">DSSP / β-Bulge</td>
                  <td className="p-3 text-stone-600">Kabsch &amp; Sander (1983) H-bond secondary structure assignment distinguishing flexible <code>Loop</code> from rigid β-<code>Strand</code>, including standard β-bulge ladder extension (e.g., IGHV3 <code>NS@IMGT92</code>).</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">ds-scFv</td>
                  <td className="p-3 text-stone-600">Disulfide-stabilized scFv carrying an engineered inter-chain disulfide bond between <code>VH:IMGT49</code> and <code>VL:IMGT120</code> (Kabat <code>H44–L100</code>; TAP Level 4a).</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">VHH Interloop</td>
                  <td className="p-3 text-stone-600">Non-canonical camelid nanobody disulfide linking CDR1/FR2 anchors (<code>IMGT &#123;35–38, 50, 55&#125;</code>) to CDR3 (<code>IMGT 105–117</code>) to stabilize long loops (TNP Level 4b, <code>Cα–Cα ≤ 18.0 Å</code>).</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">VL_Type (K/L)</td>
                  <td className="p-3 text-stone-600">ANARCI-assigned light-chain isotype (TAP 1,121 baseline: <code>K</code> = 970 [86.5%], <code>L</code> = 151 [13.5%]).</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">IMGT / Kabat</td>
                  <td className="p-3 text-stone-600">Standardized antibody variable-domain numbering schemes. AbDev Studio uses IMGT (1–128) across all CDR/FR boundaries and PTM coordinates.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">N-Glyc</td>
                  <td className="p-3 text-stone-600">N-linked glycosylation sequon <code>N-X-S/T</code> (<code>X ≠ P</code>); triggers Tier 1 RED anywhere in the variable domain due to co-translational ER glycosylation.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">PSH / PPC / PNC</td>
                  <td className="p-3 text-stone-600">3D CDR-vicinity surface patches of Hydrophobicity, Positive Charge, and Negative Charge.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">SFvCSP / C</td>
                  <td className="p-3 text-stone-600"><code>SFvCSP</code> (mAb): VH × VL exposed net charge product (e²); <code>C</code> (VHH): CDR3 compactness (<code>L3 / ρ</code>, AA/Å).</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-stone-900">pI / GRAVY / II</td>
                  <td className="p-3 text-stone-600">Isoelectric point (pH at zero net charge), Grand Average of Hydropathy (Kyte-Doolittle), and Guruprasad Instability Index.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}
