"use client";
import Button from "@/components/Common/Button";
import { FormInput } from "@/components/Common/Input";
import MainLayout from "@/components/Common/template/MainLayout";
import Creatable from "react-select/creatable";
import ReactSelect from "react-select";
import Loading from "@/components/Common/Loading";
import TextEditor from "@/components/Common/TextEditor";
import HighlightTextEditor from "@/components/Common/TextEditor/Highlight";
import { animatedCreatable, selectStyleObject } from "@/components/Common/SelectCreatable/utils";
import UseCreateConfession from "@/components/Confession/Create/hooks/useCreateConfession";
import HeaderForm from "@/components/Confession/Create/HeaderForm";

const CreateConfession = () => {
  const {
    formCreate,
    setFormCreate,
    tagsOptions,
    categoryOptions,
    currentActiveStep,
    steps,
    handleActiveStep,
    handleCreateConfession,
    isLoading,
  } = UseCreateConfession();
  return (
    <MainLayout className="flex justify-center items-center">
      <div className="px-2 sm:px-4 gap-8 flex flex-col justify-center items-center sm:w-2/3 w-full">
        <h1 className="sm:text-3xl text-2xl w-full text-center my-2 md:my-4 font-bold">Create Confession</h1>
        <div className="flex flex-col gap-4 px-2 py-4 md:p-4 border w-full rounded-lg">
          <HeaderForm
            steps={steps}
            currentActiveStep={currentActiveStep}
            handleActiveStep={handleActiveStep}
            handleCreateConfession={handleCreateConfession}
            isLoading={isLoading}
          />
          <div className="relative h-[80vh] rounded-lg overflow-x-hidden">
            <div
              className={`absolute w-full px-1 gap-2 sm:gap-4 transition-all duration-500 ease-in-out ${
                0 > currentActiveStep
                  ? "opacity-0 translate-x-full"
                  : 0 < currentActiveStep
                  ? "opacity-0 -translate-x-full"
                  : "flex flex-col opacity-100 translate-x-0"
              }`}
            >
              <FormInput
                label="From"
                type="text"
                placeholder="Danielle / A guy from starbucks / Anonymous"
                onChange={(e) => setFormCreate((prev) => ({ ...prev, name: e.target.value }))}
              />
              <FormInput
                label="To"
                type="text"
                placeholder="Haerin / A girl from Taylor Swift's concert"
                onChange={(e) => setFormCreate((prev) => ({ ...prev, to: e.target.value }))}
              />
              <FormInput label="Tags">
                <Creatable
                  isMulti
                  placeholder="Select or you can create one (ex: kpop)"
                  components={animatedCreatable}
                  options={tagsOptions}
                  styles={selectStyleObject}
                  closeMenuOnSelect={false}
                  noOptionsMessage={() => "Type to create new tag"}
                  isOptionDisabled={() => formCreate.tags.length >= 10}
                  onChange={(e: any) => setFormCreate((prev) => ({ ...prev, tags: e.map((tag: any) => tag.value) }))}
                />
              </FormInput>
              <FormInput label="Category" type="text" placeholder="Personal / Romantic / Inspirational">
                <ReactSelect
                  placeholder="Search category"
                  components={animatedCreatable}
                  options={categoryOptions}
                  styles={selectStyleObject}
                  noOptionsMessage={() => "Type to search category"}
                  onChange={(e: any) => setFormCreate((prev) => ({ ...prev, category: e.value }))}
                />
              </FormInput>
              <FormInput
                label="Excerpt"
                type="text"
                placeholder="Excerpt"
                onChange={(e) => setFormCreate((prev) => ({ ...prev, excerpt: e.target.value }))}
              />
            </div>
            <div
              className={`absolute w-full px-1 transition-all duration-500 ease-in-out ${
                1 > currentActiveStep
                  ? "opacity-0 translate-x-full"
                  : 1 < currentActiveStep
                  ? "opacity-0 -translate-x-full"
                  : "flex flex-col opacity-100 translate-x-0"
              }`}
            >
              <FormInput label="Message" type="text" placeholder="Message">
                <TextEditor value={formCreate.message} callbackSetValue={(value) => setFormCreate((prev) => ({ ...prev, message: value }))} />
              </FormInput>
            </div>
            <div
              className={`absolute w-full px-1 gap-2 sm:gap-4 transition-all duration-500 ease-in-out ${
                2 > currentActiveStep
                  ? "opacity-0 translate-x-full"
                  : 2 < currentActiveStep
                  ? "opacity-0 -translate-x-full"
                  : "flex flex-col opacity-100 translate-x-0"
              }`}
            >
              <FormInput label="Name" type="text" value={formCreate.name || "-"} disabled readOnly />
              <FormInput label="To" type="text" value={formCreate.to || "-"} disabled readOnly />
              <FormInput label="Tags">
                <Creatable
                  isMulti
                  placeholder="-"
                  components={animatedCreatable}
                  options={tagsOptions}
                  styles={selectStyleObject}
                  isDisabled
                  value={formCreate.tags.map((tag) => ({ value: tag, label: tag })) ?? "-"}
                  noOptionsMessage={() => "Type to create new tag"}
                />
              </FormInput>
              <FormInput label="Category" type="text" value={formCreate.category || "-"} disabled readOnly />
              <FormInput label="Excerpt" type="text" value={formCreate.excerpt || "-"} disabled readOnly />
              <FormInput label="Message" type="text" disabled readOnly>
                <HighlightTextEditor value={formCreate.message || "Your message will be displayed here"} forCreate />
              </FormInput>
            </div>
          </div>
          <Button
            id="submit"
            color="secondary"
            size="md"
            onClick={() => handleCreateConfession()}
            disabled={
              isLoading ||
              formCreate.name === "" ||
              formCreate.to === "" ||
              formCreate.tags.length === 0 ||
              formCreate.category === "" ||
              formCreate.excerpt === "" ||
              formCreate.message === "" ||
              !steps[2].isComplete
            }
          >
            {isLoading ? <Loading /> : "Create Confession"}
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateConfession;
